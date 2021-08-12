import { useEffect, useState } from 'react'
import StoryblokClient, {
  StoryblokComponent,
  StoryData,
} from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_KEY,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export function useStoryblok(originalStory: StoryData, preview: boolean) {
  let [story, setStory] = useState<StoryData>(originalStory)

  function initEventListeners(): void {
    if (typeof StoryblokBridge !== 'undefined') {
      const storyblokInstance = new StoryblokBridge({
        accessToken: process.env.STORYBLOK_KEY,
      })

      storyblokInstance.on(['change', 'published'], () => location.reload())

      storyblokInstance.on('input', (event: StoryblokEventPayload) => {
        if (event.story.content._uid === story.content._uid) {
          setStory(event.story)
        }
      })
    }
  }

  function addBridge(callback: Function) {
    const existingScript = document.getElementById('storyblokBridge')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = '//app.storyblok.com/f/storyblok-v2-latest.js'
      script.id = 'storyblokBridge'
      document.body.appendChild(script)
      script.onload = () => {
        callback()
      }
    } else {
      callback()
    }
  }

  useEffect(() => {
    if (preview) {
      addBridge(initEventListeners)
    }
  })

  return story
}

export default Storyblok
