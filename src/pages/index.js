import React from "react"

import StackedBarsIcon from "../components/StackedBarsIcon"
import DefaultLayout from "../layouts"

import thumbNailBookList from "../static/thumbnails/demos/BookList.png"
import thumbNailOnementI from "../static/thumbnails/abex/OnementI.png"
import ListItem from "../components/ListItem"
import ListSection from "../components/ListSection"

const IndexPage = () => {
  return (
    <DefaultLayout>
      <StackedBarsIcon />
      <section className="mt-10 w-9/12 mx-auto text-justify font-semibold">
        <p>Hi, I'm Álvaro Durán.</p>
        <p className="mt-2">
          This is my studio. In it, explore what can be achieved on the Web, and
          how is it different from any other medium out there.
        </p>
      </section>

      <ListSection title="Demos" className="" titleClassName="text-nord-11">
        <ListItem
          to="/booklist"
          src={thumbNailBookList}
          title="Book List"
          subtitle="Use of Context, Hooks and LocalStorage"
        />
        <ListItem
          to="/watch"
          src={thumbNailBookList}
          title="AppleWatch Layout"
          subtitle="Why do all the catalogs have to be the same?"
        />
      </ListSection>
    </DefaultLayout>
  )
}

export default IndexPage
