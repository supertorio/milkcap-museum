import { FC } from 'react'
import { GridBlokComponent } from '../../lib/storyblock'
import DynamicComponent from '../DynamicComponent'
export interface IGridBlok {
  blok: GridBlokComponent
}

const Grid: FC<IGridBlok> = ({ blok }: IGridBlok) => {
  return (
    <div className="grid">
      {blok.columns.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  )
}

export default Grid
