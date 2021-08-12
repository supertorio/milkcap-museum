import { StoryblokComponent } from 'storyblok-js-client'

export interface PageBlokComponent extends StoryblokComponent<string> {
  body: any[]
}

export interface TeaserBlokComponent extends StoryblokComponent<string> {
  headline: string
}

export interface GridBlokComponent extends StoryblokComponent<string> {
  columns: any[]
}

export interface FeatureBlokComponent extends StoryblokComponent<string> {
  name: string
}

export type StoryblockComponents = TeaserBlokComponent &
  GridBlokComponent &
  FeatureBlokComponent &
  PageBlokComponent

export interface IStoryblokParams {
  version: string
  cv?: number
}
