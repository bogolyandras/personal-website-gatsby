import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout path="index">
      <h1>Welcome to my world!</h1>
        <p>Here you will find some interesting stuff! Although there are not too many things, you can take a look around.</p>
        <p>Follow me on</p>
        <ul>
            <li><a href="https://www.linkedin.com/in/bogolyandras/">LinkedIn</a></li>
            <li><a href="https://github.com/bogolyandras">GitHub</a></li>
            <li><a href="https://www.credly.com/users/andras-bogoly/">Credly</a></li>
        </ul>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo pageTitle="Home Page" />
