import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/layout'
import Seo from "../components/seo"
import newsSources from "../components/news";
import * as worldNewsStyles from './world-news.module.css'

let i = 0;
const WorldNews = () => {
    return (
        <Layout path="world-news">
            <div className={worldNewsStyles.worldNews}>
                {
                    newsSources.map(
                        section =>
                            <ul>
                            {
                            section.map(
                                country =>
                                    <li key={i++}>
                                        <h2>{country.name}</h2>
                                        <ul>
                                        {country.websites.map(website =>
                                            <li key={i++}>
                                                <a href={website.url}>{website.name}</a>
                                            </li>
                                        )
                                        }
                                        </ul>
                                    </li>
                                )
                            }
                            </ul>
                    )
                }
            </div>
        </Layout>
    )
}

export default WorldNews

export const Head: HeadFC = () => <Seo pageTitle="World News" />
