import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import PropTypes from "prop-types"

import p1 from "../images/flickr/14361853906_9df07f909f_n.jpg"
import p2 from "../images/flickr/13543664355_f01064fa4a_n.jpg"
import p3 from "../images/flickr/13454067423_04ab2f2f60_n.jpg"
import p4 from "../images/flickr/13842086385_fe5ae0c52a_n.jpg"
import p5 from "../images/flickr/14592209397_87644c58b0_n.jpg"
import p6 from "../images/flickr/13364086264_61b39ac3a6_n.jpg"

import flickr from "../images/logos/flickr.png"
import instagram from "../images/logos/instagram.png"
import linkedin from "../images/logos/linkedin.png"

import styles from "./index.module.css"

const AlbumImage = (props) => (
  <td style={{ padding: 0, lineHeight: 0 }}>
    <a href={props.href}>
      <img src={props.src} alt={props.title} title={props.title} width={props.width} height={props.height}
           style={{ width: "100%", height: "auto" }}/>
    </a>
  </td>
)

AlbumImage.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default () => (
  <Layout canonicalLink="/">
    <SEO title="Home" />
    <Container style={{ paddingTop: 7, paddingBottom: 15, color: "white", backgroundColor: "#325c80" }}>
      <h1 style={{ fontSize: "3em", fontWeight: 400 }}>Welcome to my world!</h1>
      <p style={{ fontWeight: 100 }}>Here you will find some interesting stuff! Although there are not too many things,
        you can take a look around.</p>
    </Container>
    <Container style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: "white" }}>
      <table style={{ borderSpacing: 2, width: "100%" }} className={[styles.collapse, styles.table].join(" ")}>
        <tbody>
        <tr>
          <AlbumImage src={p1} href={"https://www.flickr.com/photos/bogolyandras/14361853906"} title={"Sleeping Kitten"}
                      width={320} height={180}/>
          <AlbumImage src={p2} href={"https://www.flickr.com/photos/bogolyandras/13543664355"}
                      title={"Aranyfa"} width={320} height={180}/>
          <AlbumImage src={p3} href={"https://www.flickr.com/photos/bogolyandras/13454067423"}
                      title={"Waterfall"} width={320} height={180}/>
        </tr>
        <tr>
          <AlbumImage src={p4} href={"https://www.flickr.com/photos/bogolyandras/13842086385"} title={"Salad"}
                      width={320} height={240}/>
          <AlbumImage src={p5} href={"https://www.flickr.com/photos/bogolyandras/14592209397"}
                      title={"Niederösterreich"} width={320} height={240}/>
          <AlbumImage src={p6} href={"https://www.flickr.com/photos/bogolyandras/13364086264"}
                      title={"Wagrain Mountains"} width={320} height={240}/>
        </tr>
        </tbody>
      </table>
    </Container>
    <Container style={{ color: "white", paddingBottom: 35, paddingTop: 5 }}>
      <p>Follow me on</p>
      <div>
        <a href="https://www.linkedin.com/in/bogolyandras"><img src={linkedin} alt="LinkedIn"/></a>
        <a href="https://instagram.com/bogolyandras"><img src={instagram} alt="Instagram"/></a>
        <a href="https://www.flickr.com/photos/bogolyandras"><img src={flickr} alt="Flickr"/></a>
      </div>
    </Container>
  </Layout>
)