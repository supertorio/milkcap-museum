import { StoryblokComponent } from "storyblok-js-client";
import React from 'react'
import { TeaserBlokComponent } from "../../lib/storyblock";
 
interface Props {
    blok: TeaserBlokComponent
}

const Teaser = ({blok}: Props) => {
  return (
    <h2>{blok.headline}</h2>
  )
}
 
export default Teaser