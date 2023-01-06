import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"

const WorldNews = () => {
    return (
        <Layout path="world-news">
            <div>World news will go here</div>
        </Layout>
    )
}

export default WorldNews

export const Head: HeadFC = () => <Seo pageTitle="World News" />
