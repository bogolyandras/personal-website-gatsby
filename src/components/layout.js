import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import styles from "./layout.module.css"
import Container from "../components/container"

const Menu = (props) => (
  <ul style={{ padding: 0, margin: 0 }}>
    {props.menuItems.map((child, index) => <MenuItem name={child.name} to={child.to} key={"menuItem" + index}
                                                    active={props.canonicalLink === child.to}/>)}
  </ul>
)

Menu.propTypes = {
  canonicalLink: PropTypes.string,
  menuItems: PropTypes.array.isRequired
}

const MenuItem = (props) => (
  <li className={[styles.collapse, styles.navigation].join(" ")}>
    {props.active &&
    <span>{props.name}</span>
    }
    {!props.active &&
    <Link to={props.to}>{props.name}</Link>
    }
  </li>
)

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

const menuItems = [
  { "name": "Home", "to": "/" },
  { "name": "Blog", "to": "/blog/" },
  { "name": "World news", "to": "/world-news/" }
]

export default props => (
  <div>
    <Container style={{ backgroundColor: "white" }}>
      <Menu canonicalLink={props.canonicalLink} menuItems={menuItems} />
    </Container>
    {props.children}
  </div>
)
