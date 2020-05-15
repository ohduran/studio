import React from "react"

import StackedBarsIcon from "../components/StackedBarsIcon"
import DefaultLayout from "../layouts"

import thumbNailBookList from "../static/thumbnails/demos/BookList.png"
import thumbNailOnementI from "../static/thumbnails/abex/onementI.png"
import ListItem from "../components/ListItem"
import ListSection from "../components/ListSection"

const IndexPage = () => {
  return (
    <DefaultLayout>
      <StackedBarsIcon />
      <section className="mt-10 w-9/12 mx-auto text-justify font-semibold">
        <p>Hi, I'm Álvaro Durán.</p>
        <p className="mt-2">
          I'm a Full Stack Web Developer at GESCO. I'm especially interested in
          finding out what the Internet is for.
        </p>
      </section>

      <ListSection title="Demos" className="" titleClassName="">
        <ListItem
          to="/booklist"
          src={thumbNailBookList}
          title="Book List Demo"
          subtitle="Use of Context, Hooks and LocalStorage"
        />
      </ListSection>

      <ListSection title="AbEx" className="" titleClassName="">
        <ListItem
          to="/onementI"
          src={thumbNailOnementI}
          title="Onement I"
          subtitle="Barnett Newman"
        />
      </ListSection>
    </DefaultLayout>
  )
}

export default IndexPage
