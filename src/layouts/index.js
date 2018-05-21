import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import './index.css'

const Header = () => (
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
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="András Bögöly - Personal homepage"
      meta={[
        { name: 'description', content: 'András Bögöly Personal homepage' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'theme-color', content: '#325c80' },
        { name: 'msapplication-TileColor', content: '#325c80' },
        { name: 'msapplication-TileImage', content: '/icon/ms-icon.png' }
      ]}
      link={[
        { rel: "apple-touch-icon", sizes: "180x180", href: "/icon/apple-icon.png" },
        { rel: "icon", sizes: "192x192", href: "/icon/android-icon.png", type: "image/png" },
        { rel: "icon", href: "/icon/favicon.png", type: "image/png" },
        { rel: "manifest", href: "/manifest.json" }
      ]}
    />
    <Header />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
