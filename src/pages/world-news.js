import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import PropTypes from "prop-types"
import SEO from "../components/seo"

import styles from "./world-news.module.css"

const sections = [
  [
    {
      "name": "United Kingdom",
      "websites": [
        { "name": "The Guardian", "url": "https://www.theguardian.com" },
        { "name": "British Broadcasting Corporation (BBC)", "url": "https://www.bbc.com/" },
        { "name": "The Telegraph", "url": "https://www.telegraph.co.uk" },
        { "name": "Financial Times", "url": "https://www.ft.com/" },
        { "name": "The Independent", "url": "https://www.independent.co.uk/" }
      ]
    },
    {
      "name": "United States",
      "websites": [
        { "name": "Cable News Network (CNN)", "url": "https://cnn.com/" },
        { "name": "The New York Times", "url": "https://www.nytimes.com/" },
        { "name": "Fox News", "url": "https://www.foxnews.com/" },
        { "name": "NBC News", "url": "https://www.nbcnews.com/" },
        { "name": "Washington Post", "url": "https://www.washingtonpost.com/" },
        { "name": "The Wall Street Journal", "url": "https://www.wsj.com/" },
        { "name": "USA Today", "url": "https://www.usatoday.com/" },
        { "name": "Los Angeles Times", "url": "https://www.latimes.com/" },
        { "name": "Bloomberg", "url": "https://www.bloomberg.com" },
        { "name": "Reuters", "url": "https://www.reuters.com/" },
        { "name": "Public Radio International", "url": "https://www.pri.org/" },
        { "name": "CNBC", "url": "https://www.cnbc.com/" },
        { "name": "New York Post", "url": "https://nypost.com/" },
        { "name": "Time", "url": "https://time.com/" },
        { "name": "The Atlantic", "url": "https://www.theatlantic.com" },
        { "name": "U.S. News", "url": "https://www.usnews.com/" },
        { "name": "CBS News", "url": "https://www.cbsnews.com/" },
        { "name": "Houston Chronicle", "url": "https://www.chron.com/" },
        { "name": "SFGate", "url": "https://www.sfgate.com/" }
      ]
    },
    {
      "name": "Australia",
      "websites": [
        { "name": "ABC News", "url": "https://abcnews.go.com/" },
        { "name": "news.com.au", "url": "https://www.news.com.au/" }
      ]
    },
    {
      "name": "Canada",
      "websites": [
        { "name": "Canadian Broadcasting Corporation (CBC)", "url": "https://www.cbc.ca/" }
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
        { "name": "Deutsche Welle", "url": "https://www.dw.com/en/" },
        { "name": "Spiegel", "url": "https://www.spiegel.de/international/" }
      ]
    }
  ],
  [
    {
      "name": "Japan",
      "websites": [
        { "name": "Nikkei Asian Review", "url": "https://asia.nikkei.com/" },
        { "name": "The Asahi Shimbun", "url": "http://www.asahi.com/ajw/" },
        { "name": "The Japan News", "url": "https://the-japan-news.com/" },
        { "name": "The Japan Times", "url": "https://www.japantimes.co.jp/ "}
      ]
    },
    {
      "name": "South Korea",
      "websites": [
        { "name": "The Chosun Ilbo", "url": "http://english.chosun.com/" },
        { "name": "Korea Joongang Daily", "url": "https://koreajoongangdaily.joins.com/" },
        { "name": "The Hankyoreh", "url": "http://english.hani.co.kr/" },
        { "name": "Daily NK", "url": "https://www.dailynk.com/english/" }
      ]
    },
    {
      "name": "Singapore",
      "websites": [
        { "name": "Straits Times", "url": "https://www.straitstimes.com/" }
      ]
    },
    {
      "name": "Taiwan",
      "websites": [
        { "name": "Taipei Times", "url": "https://www.taipeitimes.com/" }
      ]
    },
    {
      "name": "Qatar",
      "websites": [
        { "name": "Al Jazeera", "url": "https://www.aljazeera.com/" }
      ]
    },
    {
      "name": "United Arab Emirates",
      "websites": [
        { "name": "Gulf news", "url": "https://gulfnews.com/" }
      ]
    },
    {
      "name": "Saudi Arabia",
      "websites": [
        { "name": "Arab news", "url": "https://www.arabnews.com/" }
      ]
    },
    {
      "name": "India",
      "websites": [
        { "name": "TFIPost", "url": "https://tfipost.com/" },
        { "name": "India Times", "url": "https://www.indiatimes.com/" },
        { "name": "Hindustan Times", "url": "https://www.hindustantimes.com/" },
        { "name": "The Hindu", "url": "https://www.thehindu.com/" }
      ]
    },
    {
      "name": "Israel",
      "websites": [
        { "name": "The Jerusalem Post", "url": "https://www.jpost.com/" }
      ]
    }

  ],
  [
    {
      "name": "Russia",
      "websites": [
        { "name": "Russia Today", "url": "https://www.rt.com" },
        { "name": "Pravda", "url": "https://www.pravdareport.com/" },
        { "name": "Sputnik News", "url": "https://sputniknews.com/" },
        { "name": "Itar Tass", "url": "https://tass.com/" }
      ]
    },
    {
      "name": "China",
      "websites": [
        { "name": "CGTN", "url": "https://www.cgtn.com/" },
        { "name": "CCTV", "url": "https://english.cctv.com/" },
        { "name": "Xinhua", "url": "http://www.xinhuanet.com/english/" },
        { "name": "People's Daily", "url": "http://en.people.cn/" },
        { "name": "China Daily", "url": "https://www.chinadaily.com.cn/" },
        { "name": "Caixin", "url": "https://www.caixinglobal.com/" }
      ]
    },
    {
      "name": "Hong Kong",
      "websites": [
        { "name": "South China Morning Post", "url": "https://www.scmp.com/" },
        { "name": "Apple Daily", "url": "https://hk.appledaily.com/engnews/hotpick/"}
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
]

let i = 0

/**
 * A section is rather an invisible divider.
 * On a normal desktop screen (>700px) we typically have 3 vertically divided sections.
 * On a mobile view, it will collapse and the sections will be one by one followed by each other, practically invisible.
 * @param {*} props
 */
const Section = (props) => (
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
    {
      props.subSections.map((subSectionData) => <li key={i++}><SubSection name={subSectionData.name}
                                                                          websites={subSectionData.websites}/></li>)
    }
  </ul>
)

/**
 * A section accepts an array of subsections.
 * A section does not have a name or anything in itself. It only has purpose to hold contents together.
 */
Section.propTypes = {
  subSections: PropTypes.array.isRequired,
}

/**
 * A subsection typically represents a country with multiple websites / news agencies.
 * @param {*} props
 */
const SubSection = (props) => (
  <div>
    <h1 style={{ margin: 2 }}>{props.name}</h1>
    <ul style={{ listStyle: "none", padding: "0px 10px 10px 10px" }}>
      {
        props.websites.map((website) => <li style={{ padding: "0.5rem", borderBottom: "black dotted 1px" }} key={i++}>
          <Link name={website.name} url={website.url} key={i++}/></li>)
      }
    </ul>
  </div>

)

/**
 * A name of the country or organization and the related websites are required.
 */
SubSection.propTypes = {
  name: PropTypes.string.isRequired,
  websites: PropTypes.array.isRequired,
}

const Link = (props) => (
  <a href={props.url}>{props.name}</a>
)

Link.protoTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default () => (
  <Layout canonicalLink="/world-news/">
    <SEO title="World news" />
    <Container style={{ backgroundColor: "white", paddingTop: 10 }}>
      <table style={{ width: "100%", tableLayout: "fixed" }} className={styles.collapse}>
        <tbody style={{ verticalAlign: "top" }}>
        <tr>
          {
            sections.map((sectionData) => <td key={i++}><Section subSections={sectionData}/></td>)
          }
        </tr>
        </tbody>
      </table>
    </Container>
  </Layout>
)
