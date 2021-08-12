import React from 'react'
import { GridBlokComponent } from '../../lib/storyblock'
import DynamicComponent from '../DynamicComponent'
 
interface Props {
    blok: GridBlokComponent
}

const Grid = ({ blok }: Props) => {
  return (
    <div className="grid">
      {blok.columns.map((blok) =>
        (<DynamicComponent blok={blok} key={blok._uid}/>)
      )}
    </div>
  )
}
 
export default Grid