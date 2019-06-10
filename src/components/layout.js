import React from "react"
import Helmet from "react-helmet"
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styles from "./layout.module.css"
import Container from "../components/container"

const Menu = (props) => (
  <ul style={{padding: 0, margin: 0}}>
    {props.children.map((child, index) => <MenuItem name={child.props.name} to={child.props.to} key={"menuItem" + index} active={props.canonicalLink === child.props.to} /> )}
  </ul>
)

Menu.propTypes = {
  canonicalLink: PropTypes.string
}

const MenuItem = (props) => (
  <li className={[styles.collapse, styles.navigation].join(' ') }>
    <Link to={props.to}>{props.name}</Link>
  </li>
)

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool
}

export default props => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="András Bögöly Personal homepage" />
      <title>{(props.title) ? "András Bögöly - " + props.title :  "András Bögöly - Personal homepage"}</title>
      { props.canonicalLink &&
        <link rel="canonical" href={"https://bogolyandras.com" + props.canonicalLink} />
      }
    </Helmet>
    <Container style={{backgroundColor: "white"}}>
      <Menu canonicalLink={props.canonicalLink}>
        <MenuItem name="Home" to="/" />
        <MenuItem name="Blog" to="/blog/" />
        <MenuItem name="World news" to="/world-news/" />
      </Menu>
    </Container>
    {props.children}
  </div>
)
