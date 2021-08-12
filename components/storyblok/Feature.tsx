import { FC } from 'react'
import { FeatureBlokComponent } from '../../lib/storyblock'

export interface IFeatureBlok {
  blok: FeatureBlokComponent
}

const Feature: FC<IFeatureBlok> = ({ blok }: IFeatureBlok) => (
  <div className="column feature">{blok.name}</div>
)

export default Feature
