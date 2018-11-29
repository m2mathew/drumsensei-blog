// External Dependencies
import React from 'react'
import get from 'lodash/get'
// import { Link } from 'gatsby'

// Internal Dependencies
import DsLogo from '../assets/ds-logo.svg';
import { rhythm, scale } from '../utils/typography'

// Component Definition
class Layout extends React.Component {
  render() {
    const {
      children,
      description,
      location,
      title,
    } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            color: 'rebeccapurple',
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 64,
          }}
        >
          <div
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {description}
          </div>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            color: 'rebeccapurple',
            // fontFamily: 'Montserrat, sans-serif',
            marginTop: 64,
            marginBottom: rhythm(-1),
          }}
        >
          <div
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {description}
          </div>
        </h3>
      )
    }
    return (
      <div
        style={{
          background: 'pink',
        }}
      >
        <nav
          style={{
            background: '#f5f5f5',
            borderBottom: '4px solid #280154',
            boxShadow: '3px 0 5px #280154',
            display: 'flex',
            alignItems: 'center',
            height: 64,
            padding: '12px 32px',
            position: 'fixed',
          }}
        >
          <div
            style={{
              height: 48,
              transform: 'translateY(8px)',
            }}
          >
            <DsLogo />
          </div>
        </nav>
        <main
          style={{
            background: '#f5f5f5',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
        </main>
      </div>
    )
  }
}

export default Layout

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`
