import React from "react"
import Layout from "../components/Layout"
import { Button } from "../components/Button"

export default function Home() {
  return (
    <Layout>
      <h1>HELLO !!!</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean. A small river named Duden flows by their place and supplies it
        with the necessary evil.
      </p>
      <Button>Click Me!</Button>
    </Layout>
  )
}
