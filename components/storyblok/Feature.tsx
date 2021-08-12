import React from 'react'
import { FeatureBlokComponent } from '../../lib/storyblock'
 
interface Props {
    blok: FeatureBlokComponent
}

const Feature = ({ blok }: Props) => (
    <div className="column feature">
      {blok.name}
    </div>
)
 
export default Feature