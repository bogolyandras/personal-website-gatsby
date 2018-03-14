import ReactDOM from 'react-dom'
import React from 'react'
import Link from 'gatsby-link'

const websites = ["asdasd", "fgsduiobhsdo", "afasfasf"];

const listItems = websites.map((website) =>
  <li key={website.toString()}>{website}</li>
)

const List = () => (

  <div className={'album-skeleton'}>
    <div className={'container'}>
      <ul>{listItems}</ul>
    </div>
  </div>
  
)

export default List
