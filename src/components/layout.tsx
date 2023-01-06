import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const doclistStyles = {
  paddingLeft: 0,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
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
  },
  {
    text: "About",
    url: "/about/",
    path: "about"
  }
]

type DataProps = {
  path: string,
  children: React.ReactNode
}

const Layout = ({ path, children }: DataProps) => {

  return (
    <main style={pageStyles}>
      <ul style={doclistStyles}>
        {docLinks.map(doc => {
          if (path == doc.path) {
            return (
                <li key={doc.url} style={docLinkStyle}>
                  {doc.text}
                </li>
            )
          } else {
            return (
                <li key={doc.url} style={docLinkStyle}>
                  <Link
                      style={linkStyle}
                      to={`${doc.url}`}
                  >
                    {doc.text}
                  </Link>
                </li>
            )
          }
        })}
      </ul>
      <div>
        {children}
      </div>
    </main>
  )
}

export default Layout
