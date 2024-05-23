import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout path="index">
      <h1>Welcome to my world!</h1>
        <p>Here you will find some interesting stuff! Although there are not too many things, you can take a look around.</p>
        <StaticImage src="../images/Firefly a city of cats 99761.jpg" alt="A city of cats" width="1000" />
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
