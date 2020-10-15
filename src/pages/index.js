import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/homepage"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
    <Projects />
  </Layout>
)

export default IndexPage
