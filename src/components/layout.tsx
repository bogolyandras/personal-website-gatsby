import * as React from "react"
import { Link } from "gatsby"
import * as layoutStyle from './layout.module.css'

const pageStyles = {
  display: "block",
  padding: 36,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const docLinks = [
  {
    text: "Home",
    url: "/",
    path: "index"
  },
  {
    text: "Blog",
    url: "/blog/",
    path: "blog"
  },
  {
    text: "World News",
    url: "/world-news/",
    path: "world-news"
  }
]

type DataProps = {
  path: string,
  children: React.ReactNode
}

const Layout = ({ path, children }: DataProps) => {

  return (
      <div className={layoutStyle.mainLayout}>
        <nav className={layoutStyle.nav}>
          <ul>
            {docLinks.map(doc => {
              if (path == doc.path) {
                return (
                    <li key={doc.url}>
                      <span>{doc.text}</span>
                    </li>
                )
              } else {
                return (
                    <li key={doc.url}>
                      <Link
                          to={`${doc.url}`}
                      >
                        {doc.text}
                      </Link>
                    </li>
                )
              }
            })}
          </ul>
        </nav>
        <main style={pageStyles}>
          {children}
        </main>
      </div>
  )
}

export default Layout
