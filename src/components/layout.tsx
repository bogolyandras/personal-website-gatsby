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
    color: "#8954A8",
  },
  {
    text: "Blog",
    url: "/blog/",
    color: "#8954A8",
  },
  {
    text: "About",
    url: "/about/",
    color: "#8954A8",
  }
]

type DataProps = {
  pageTitle: string,
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: DataProps) => {

  return (
    <main style={pageStyles}>
      <ul style={doclistStyles}>
        {docLinks.map(doc => (
          <li key={doc.url} style={docLinkStyle}>
            <Link
              style={linkStyle}
              to={`${doc.url}`}
            >
              {doc.text}
            </Link>
          </li>
        ))}
      </ul>
      <h1 style={headingStyles}>{pageTitle}</h1>
      <div>
        {children}
      </div>
    </main>
  )
}

export default Layout