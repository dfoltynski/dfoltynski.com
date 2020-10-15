import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "64px" }}>404</h1>
      <p>
        Youa are lost... go back{" "}
        <Link to="/">
          <b>home</b>
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
