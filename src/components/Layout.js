// External Dependencies
import React, { Component } from 'react'
import {
  Link,
} from 'gatsby'

// Internal Dependencies
import './index.css';
import DsLogo from '../assets/ds-logo-js.svg';
import Footer from './Footer';
import { rhythm, scale } from '../utils/typography';

// Local Variables
const PrestoDarkPurple = '#280154';
const SMALL_SCREEN_SIZE = 500;

// Component Definition
class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSmallScreen: false,
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({
        isSmallScreen: window.innerWidth < SMALL_SCREEN_SIZE,
      })
    }
  }

  render() {
    const {
      children,
      description,
      location,
    } = this.props;

    const { isSmallScreen } = this.state;

    const rootPath = `${__PATH_PREFIX__}/`
    let header;

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
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <DsLogo
                  svgStyles={{
                    height: isSmallScreen ? 32 : 48,
                    transform: 'translateY(10px)',
                  }}
                />
              </Link>
            </div>
            <div>
              <Link
                to="/about"
                style={{
                  boxShadow: 'none',
                  color: 'inherit',
                  fontWeight: 600,
                  textDecoration: 'none',
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
  }
}

export default Layout
