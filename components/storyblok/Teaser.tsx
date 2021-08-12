import { FC } from 'react'
import { TeaserBlokComponent } from '../../lib/storyblock'

export interface ITeaserBlok {
  blok: TeaserBlokComponent
}

const Teaser: FC<ITeaserBlok> = ({ blok }: ITeaserBlok) => {
  return <h2>{blok.headline}</h2>
}

export default Teaser
