import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"

const AboutPage = () => {
    return (
      <Layout path="about">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    )
  }

export default AboutPage

export const Head: HeadFC = () => <Seo pageTitle="About Page" />
