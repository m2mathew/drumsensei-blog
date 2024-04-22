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
import drumsenseiAvatar from './drumsensei_drum_avatar_purple.svg';

// Local Variables
const NAV_HEIGHT = 104;
const PrestoDarkPurple = '#280154';
const SMALL_SCREEN_SIZE = 800;

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
      const headerScale = isSmallScreen ? scale(0.9) : scale(1.2)

      header = (
        <h1
          style={{
            color: 'rebeccapurple',
            ...headerScale,
            marginBottom: rhythm(1.5),
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
          background: '#f3f3f3',
        }}
      >
        <nav
          style={{
            background: 'lavenderblush',
            borderBottom: `4px solid ${PrestoDarkPurple}`,
            boxShadow: `3px 0 5px ${PrestoDarkPurple}`,
            display: 'flex',
            alignItems: 'center',
            minHeight: NAV_HEIGHT,
            padding: '12px 32px',
            width: '100%',
            zIndex: 1000,
            ...isSmallScreen ? { padding: '12px 8px' } : {},
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
            <div
              style={{
                alignSelf: 'flex-start',
                alignItems: 'center',
                display: 'flex',
                gap: isSmallScreen ? 4 : 16,
              }}
            >
              <img
                alt="Drumsensei logo"
                src={drumsenseiAvatar}
                style={{
                  height: 124,
                  width: 124,
                  marginBottom: 0,
                  ...isSmallScreen ? { height: 72, width: 72 } : {},
                }}
              />
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
                    transform: 'translateY(10px) rotate(-2deg)',
                  }}
                />
              </Link>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
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
              <Link
                to="/"
                style={{
                  boxShadow: 'none',
                  color: 'inherit',
                  fontWeight: 600,
                  marginRight: 24,
                  textDecoration: 'none',
                }}
              >
                Blog
              </Link>
              <a
                href="https://www.mikemathew.com/"
                style={{
                  boxShadow: 'none',
                  color: 'inherit',
                  fontWeight: 600,
                  marginRight: 24,
                  textDecoration: 'none',
                }}
              >
                Projects
              </a>
            </div>
          </div>
        </nav>
        <main
          style={{
            background: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 4,
            maxWidth: rhythm(25),
            padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
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
