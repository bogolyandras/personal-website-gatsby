import React from "react"
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <div className={'album-skeleton'}>
      <div className={'container'}>
        <h1>Not found 😿</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage


// import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// )

// export default NotFoundPage
