import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"

export default () => (
  <Layout>
    <Container>
      <h1>Not found <span role="img" aria-label="Sad cat">😿</span></h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)
