import { StoryblokComponent } from 'storyblok-js-client'

export interface PageBlokComponent extends StoryblokComponent {
  body: any[]
}

export interface TeaserBlokComponent extends StoryblokComponent {
  headline: string
}

export interface GridBlokComponent extends StoryblokComponent {
  columns: any[]
}

export interface FeatureBlokComponent extends StoryblokComponent {
  name: string
}
