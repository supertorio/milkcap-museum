import React, { FC } from "react";
import { PageBlokComponent } from "../../lib/storyblock";
import DynamicComponent from "../DynamicComponent";

interface Props {
    blok: PageBlokComponent
}

const Page:FC<Props> = ({blok}:Props) => (
    <main>
        {blok.body ? 
            blok.body.map((blok) => (
                <DynamicComponent blok={blok} key={blok._uid} />
            ))
        : null }
    </main>
)

export default Page;