import ReactDOM from 'react-dom'
import React from 'react'
import Link from 'gatsby-link'

import './world-news.css'

var i = 0;
const sections = [
  [
    {
      "name": "Great Britain",
      "websites": [
        { "name": "British Broadcasting Corporation", "url": "http://www.bbc.com" },
        { "name": "The Guardian", "url": "https://www.theguardian.com" },
        { "name": "The Telegraph", "url": "https://www.telegraph.co.uk" },
        { "name": "Financial Times", "url": "https://www.ft.com/" }
      ]
    },
    {
      "name": "United States",
      "websites": [
        { "name": "The Wall Street Journal", "url": "https://www.wsj.com/" },
        { "name": "Public Radio International", "url": "https://www.pri.org/" },
        { "name": "Fox News", "url": "http://www.foxnews.com/" },
        { "name": "Bloomberg", "url": "https://www.bloomberg.com" },
        { "name": "Cable News Network", "url": "https://cnn.com/" },
        { "name": "Reuters", "url": "https://www.reuters.com/" }
      ]
    }
  ],
  [
    {
      "name": "Japan",
      "websites": [
        { "name": "Nikkei Asian Review", "url": "https://asia.nikkei.com/" },
        { "name": "The Asahi Shimbun", "url": "http://www.asahi.com/ajw/" }
      ]
    },
    {
      "name": "Miscellaneous",
      "websites": [
        { "name": "Straits Times", "url": "http://www.straitstimes.com" }
      ]
    }
  ],
  [
    {
      "name": "Russia",
      "websites": [
        { "name": "Russia Today", "url": "https://www.rt.com" }
      ]
    },
    {
      "name": "China",
      "websites": [
        { "name": "CCTV", "url": "http://english.cctv.com/" }
      ]
    }
  ]
];

const List = () => (

  <div className={'album-skeleton'}>
    <div className={'container'}>
      <table className={'collapse'}>
        <tbody>
          <tr>
            {
              sections.map(
                (section) =>
                  <td key={"l" + i++}>
                    <ul className={'section'}>
                      {
                        section.map(
                          (category) =>
                            <li key={"l" + i++}>
                              <h1>{category.name}</h1>
                              <ul className={'weblink'}>
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
)

export default List
