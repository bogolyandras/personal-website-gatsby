import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'

import './world-news.css'
import Layout from '../components/layout';

var i = 0;
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

const List = () => (
  <Layout>
    <div className={"album-skeleton"}>
      <div className={"container"}>
        <table className={"collapse"}>
          <tbody>
            <tr>
              {
                sections.map(
                  (section) =>
                    <td key={"l" + i++}>
                      <ul className={"section"}>
                        {
                          section.map(
                            (category) =>
                              <li key={"l" + i++}>
                                <h1>{category.name}</h1>
                                <ul className={"weblink"}>
                                  {
                                    category.websites.map(
                                      (website) =>
                                        <li key={"l" + i++}>
                                          <a href={website.url}>{website.name}</a>
                                        </li>
                                    )
                                  }
                                </ul>
                              </li>
                          )
                        }
                      </ul>
                    </td>
                )
              }
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
)

export default List
