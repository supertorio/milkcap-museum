import { FC } from 'react'
import { PageBlokComponent } from '../../lib/storyblock'
import DynamicComponent from '../DynamicComponent'

export interface IPageBlok {
  blok: PageBlokComponent
}

const Page: FC<IPageBlok> = ({ blok }: IPageBlok) => (
  <main>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
)

export default Page
