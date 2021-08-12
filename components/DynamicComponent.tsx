import SbEditable from 'storyblok-react'
import Teaser, { ITeaserBlok } from './storyblok/Teaser'
import Grid, { IGridBlok } from './storyblok/Grid'
import Feature, { IFeatureBlok } from './storyblok/Feature'
import Page, { IPageBlok } from './storyblok/Page'
import { FC } from 'react'
import { StoryblockComponents } from '../lib/storyblock'

// resolve Storyblok components to Next.js components
type MappableComponents =
  | FC<ITeaserBlok>
  | FC<IGridBlok>
  | FC<IFeatureBlok>
  | FC<IPageBlok>

const ComponentsMap: Record<any, MappableComponents> = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  page: Page,
}

interface IDynamicComponent {
  blok: StoryblockComponents
}

const DynamicComponent = ({ blok }: IDynamicComponent) => {
  // check if component is defined above
  if (typeof ComponentsMap[blok.component] !== 'undefined') {
    const Component = ComponentsMap[blok.component]
    // wrap with SbEditable for visual editing
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    )
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
