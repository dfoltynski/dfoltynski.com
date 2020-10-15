import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/homepage"
import Projects from "../components/projects"
import Skills from "../components/skills"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
    <Projects />
    <Skills />
  </Layout>
)

export default IndexPage
