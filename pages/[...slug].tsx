import Head from 'next/head'
import styles from '../styles/Home.module.css'

// The Storyblok Client & hook
import Storyblok, { useStoryblok } from '../lib/storyblok'
import DynamicComponent from '../components/DynamicComponent'
import { GetStaticPropsContext } from 'next'
import { IStoryblokParams, StoryblockComponents } from '../lib/storyblock'
import { SlugPath } from '../types'
import { StoryData } from 'storyblok-js-client'

interface IDynamicPage {
  story: StoryData
  preview: boolean
}

export default function DynamicPage({ story, preview }: IDynamicPage) {
  story = useStoryblok(story, preview)
  return (
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : 'My Site'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : 'My Site'}</h1>
      </header>

      <main>
        {story
          ? story.content.body.map((blok: StoryblockComponents) => (
              <DynamicComponent blok={blok} key={blok._uid} />
            ))
          : null}
      </main>
    </div>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // we need to join the slug on catch all routes
  let slug = context?.params?.slug || ''
  slug = Array.isArray(slug) ? slug.join('/') : slug
  let params: IStoryblokParams = {
    version: 'draft', // or 'published'
  }

  if (context.preview) {
    params.version = 'draft'
    params.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  // get all stories inside the pages folder
  let { data } = await Storyblok.get('cdn/links/')

  let paths: SlugPath[] = []
  Object.keys(data.links).forEach((linkKey) => {
    // don't generate route for folders or home entry
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug.split('/')

    // generate page for the slug
    paths.push({ params: { slug } })
  })

  return {
    paths: paths,
    fallback: 'blocking',
  }
}
