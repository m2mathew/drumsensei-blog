// External Dependencies
import React from 'react'
// import get from 'lodash/get'
import {
  Link,
} from 'gatsby'

// Internal Dependencies
import Footer from './Footer';
import DsLogo from '../assets/ds-logo.svg';
import { rhythm, scale } from '../utils/typography'

// Local Variables
const PrestoDarkPurple = '#280154';

// Component Definition
const Layout = (props) => {
  const {
    children,
    description,
    location,
    // title,
  } = props

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          color: 'rebeccapurple',
          ...scale(1.2),
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
          fontFamily: 'Montserrat, sans-serif',
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
    <div>
      <nav
        style={{
          background: 'lavenderblush',
          borderBottom: `4px solid ${PrestoDarkPurple}`,
          boxShadow: `3px 0 5px ${PrestoDarkPurple}`,
          display: 'flex',
          alignItems: 'center',
          height: 64,
          padding: '12px 32px',
          position: 'fixed',
          width: '100%',
          zIndex: 1000,
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div>
            <Link
              to="/"
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <DsLogo
                svgStyles={{
                  transform: 'translateY(10px)',
                  height: 48,
                  width: 'auto',
                }}
              />
            </Link>
          </div>
          <div>
            <Link
              to="/about"
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
      <main
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(25),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </main>
      <Footer />
    </div>
  )
};

export default Layout
