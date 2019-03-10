import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className={'navigation'}>
      <div className={'container'}>
          <table className={'collapse'}>
            <tbody>
              <tr>
                  <td className={'navigation-left'}>
                      <ul>
                          <li><Link to="/">Home</Link></li>
                      </ul>
                  </td>
              </tr>
            </tbody>
          </table>
      </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
