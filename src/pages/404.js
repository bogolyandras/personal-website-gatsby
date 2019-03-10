import React from "react"
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <div className={'album-skeleton'}>
      <div className={'container'}>
        <h1>Not found <span role="img" aria-label="Sad cat">😿</span></h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
