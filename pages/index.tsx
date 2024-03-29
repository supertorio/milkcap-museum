import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { StoryblokComponent, StoryData } from 'storyblok-js-client'

import Storyblok, { useStoryblok } from '../lib/storyblok'
import DynamicComponent from '../components/DynamicComponent'
import { IStoryblokParams, StoryblockComponents } from '../lib/storyblock'

interface IHome {
  story: StoryData
  preview: boolean
}

export default function Home({ story, preview }: IHome) {
  const pageStory = useStoryblok(story, preview)

  return (
    <div>
      <Head>
        <title>Milkcap Museum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="text-xl font-bold">
          {pageStory ? pageStory.name : 'Milkcap Museum'}
        </h1>
      </header>
      <DynamicComponent blok={pageStory.content as StoryblockComponents} />
    </div>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  let slug = 'home'
  let params: IStoryblokParams = {
    version: 'draft',
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
