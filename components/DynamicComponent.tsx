import SbEditable from 'storyblok-react'
import Teaser from './storyblok/Teaser'
import Grid from './storyblok/Grid'
import Feature from './storyblok/Feature'
import Page from './storyblok/Page'
import { StoryblokComponent } from 'storyblok-js-client'
import React from 'react'
 
// resolve Storyblok components to Next.js components
const Components: Record<string, React.FC> = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'page': Page,
}

interface Props {
    blok: StoryblokComponent<any>
}

 
const DynamicComponent = ({blok}: Props) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    // wrap with SbEditable for visual editing
    return (<SbEditable content={blok}><Component blok={blok} /></SbEditable>)
  }
  
  // fallback if the component doesn't exist
  return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}
 
export default DynamicComponent