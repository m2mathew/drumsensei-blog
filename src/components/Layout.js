// External Dependencies
import React from 'react'
import { Link } from 'gatsby'

// Internal Dependencies
import DsLogo from '../assets/ds-logo.svg';
import { rhythm, scale } from '../utils/typography'

// Component Definition
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            color: 'rebeccapurple',
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            color: 'rebeccapurple',
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <nav
          style={{
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            height: 64,
            padding: '12px 32px',
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
            background: 'pink',
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
