import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import PropTypes from "prop-types"

import styles from "./world-news.module.css"

const sections = [
  [
    {
      "name": "United Kingdom",
      "websites": [
        { "name": "The Guardian", "url": "https://www.theguardian.com" },
        { "name": "British Broadcasting Corporation", "url": "http://www.bbc.com" },
        { "name": "The Telegraph", "url": "https://www.telegraph.co.uk" },
        { "name": "Financial Times", "url": "https://www.ft.com/" },
        { "name": "The Independent", "url": "http://www.independent.co.uk/" }
      ]
    },
    {
      "name": "United States",
      "websites": [
        { "name": "Cable News Network", "url": "https://cnn.com/" },
        { "name": "The New York Times", "url": "https://www.nytimes.com/" },
        { "name": "Fox News", "url": "http://www.foxnews.com/" },
        { "name": "NBC News", "url": "http://www.nbcnews.com/" },
        { "name": "Washington Post", "url": "https://www.washingtonpost.com/" },
        { "name": "The Wall Street Journal", "url": "https://www.wsj.com/" },
        { "name": "USA Today", "url": "https://www.usatoday.com/" },
        { "name": "Los Angeles Times", "url": "http://www.latimes.com/" },
        { "name": "Bloomberg", "url": "https://www.bloomberg.com" },
        { "name": "Reuters", "url": "https://www.reuters.com/" },
        { "name": "Public Radio International", "url": "https://www.pri.org/" },
        { "name": "CNBC", "url": "http://www.cnbc.com/" },
        { "name": "New York Post", "url": "http://nypost.com/" },
        { "name": "Time", "url": "http://time.com/" },
        { "name": "The Atlantic", "url": "https://www.theatlantic.com" },
        { "name": "U.S. News", "url": "https://www.usnews.com/" },
        { "name": "CBS News", "url": "http://www.cbsnews.com/" },
        { "name": "Houston Chronicle", "url": "http://www.chron.com/" },
        { "name": "SFGate", "url": "http://www.sfgate.com/" },
      ]
    },
    {
      "name": "Australia",
      "websites": [
        { "name": "ABC News", "url": "http://abcnews.go.com/" },
        { "name": "news.com.au", "url": "http://www.news.com.au/" }
      ]
    },
    {
      "name": "Canada",
      "websites": [
        { "name": "Canadian Broadcasting Corporation", "url": "http://www.cbc.ca/" }
      ]
    },
    {
      "name": "France",
      "websites": [
        { "name": "Agence France Presse", "url": "https://www.afp.com/en" }
      ]
    },
    {
      "name": "Germany",
      "websites": [
        { "name": "Deutsche Welle", "url": "http://www.dw.com" }
      ]
    }
  ],
  [
    {
      "name": "Japan",
      "websites": [
        { "name": "Nikkei Asian Review", "url": "https://asia.nikkei.com/" },
        { "name": "The Asahi Shimbun", "url": "http://www.asahi.com/ajw/" },
        { "name": "Yomiuri Shimbun", "url": "http://the-japan-news.com/" },
        { "name": "NHK World", "url": "https://www3.nhk.or.jp/nhkworld/" }
      ]
    },
    {
      "name": "South Korea",
      "websites": [
        { "name": "The Chosun Ilbo", "url": "http://english.chosun.com/" },
        { "name": "Korea Joongang Daily", "url": "http://koreajoongangdaily.joins.com/" },
        { "name": "The Hankyoreh", "url": "http://english.hani.co.kr/" },
        { "name": "Daily NK", "url": "http://english.dailynk.com/english/" }
      ]
    },
    {
      "name": "Singapore",
      "websites": [
        { "name": "Straits Times", "url": "http://www.straitstimes.com" }
      ]
    },
    {
      "name": "Qatar",
      "websites": [
        { "name": "Al Jazeera", "url": "http://www.aljazeera.com" }
      ]
    },
    {
      "name": "India",
      "websites": [
        { "name": "India Times", "url": "http://www.indiatimes.com/" },
        { "name": "Hindustan Times", "url": "http://www.hindustantimes.com/" },
        { "name": "The Hindu", "url": "http://www.thehindu.com/" }
      ]
    }
  ],
  [
    {
      "name": "Russia",
      "websites": [
        { "name": "Russia Today", "url": "https://www.rt.com" },
        { "name": "Pravda", "url": "http://www.pravdareport.com/" },
        { "name": "Sputnik News", "url": "https://sputniknews.com/" },
        { "name": "Itar Tass", "url": "http://tass.com/" }
      ]
    },
    {
      "name": "China",
      "websites": [
        { "name": "CCTV", "url": "http://english.cctv.com/" },
        { "name": "Xinhua", "url": "http://www.news.cn/english/" },
        { "name": "People Daily", "url": "http://en.people.cn" },
        { "name": "China Daily", "url": "http://www.chinadaily.com.cn/" }
      ]
    },
    {
      "name": "Turkey",
      "websites": [
        { "name": "Anadolu Agency", "url": "https://aa.com.tr/en" }
      ]
    },
    {
      "name": "North Korea",
      "websites": [
        { "name": "Rodong Sinmun", "url": "http://rodong.rep.kp/en/" }
      ]
    }
  ]
];

/**
 * A section is rather an invisible divider.
 * On a normal desktop screen (>700px) we typically have 3 vertically divided sections.
 * On a mobile view, it will collapse and the sections will be one by one followed by each other, practically invisible.
 * @param {*} props 
 */
const Section = (props) => (
  <ul style={{listStyle: "none", padding: 0, margin: 0}}>
    {
      props.subSections.map((subSectionData) => <li><SubSection name={subSectionData.name} websites={subSectionData.websites} /></li>)
    }
  </ul>
)

/**
 * A section accepts an array of subsections.
 * A section does not have a name or anything in itself. It only has purpose to hold contents together.
 */
Section.propTypes = {
  subSections: PropTypes.array.isRequired
}

/**
 * A subsection typically represents a country with multiple websites / news agencies.
 * @param {*} props 
 */
const SubSection = (props) => (
  <div>
    <h1 style={{margin: 2}}>{props.name}</h1>
    <ul style={{listStyle: "none", padding: "0px 10px 10px 10px"}}>
      {
        props.websites.map((website) => <li style={{padding: "0.5rem", borderBottom: "black dotted 1px"}}><Link name={website.name} url={website.url} /></li>)
      }
    </ul>
  </div>
  
)

/**
 * A name of the country or organization and the related websites are required.
 */
SubSection.propTypes = {
  name: PropTypes.string.isRequired,
  websites: PropTypes.array.isRequired
}

const Link = (props) => (
  <a href={props.url}>{props.name}</a>
)

Link.protoTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default () => (
  <Layout canonicalLink="/world-news/" title="World news">
    <Container style={{backgroundColor: "white", paddingTop: 10}}>
      <table style={{width: "100%", tableLayout: "fixed"}} className={styles.collapse}>
        <tbody style={{verticalAlign: "top"}}>
          <tr>
            {
              sections.map((sectionData) => <td><Section subSections={sectionData} /></td>)
            }
          </tr>
        </tbody>
      </table>
    </Container>
  </Layout>
)
