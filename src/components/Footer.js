// External Dependencies
import React from 'react'

// Internal Dependencies
import { rhythm } from '../utils/typography'

// Local Variables
const PrestoDarkPurple = '#280154';

// Component Definition
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'lavenderblush',
        borderTop: `1px solid ${PrestoDarkPurple}`,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        marginTop: rhythm(1),
        padding: rhythm(0.75),
      }}
    >
      <div>
        &copy; {currentYear} Drumsensei Media
      </div>

      <div>
        <a
          href="https://mstdn.social/@drumsensei"
          rel="me"
          style={{
            boxShadow: 'none',
            color: 'inherit',
            fontWeight: 500,
            marginRight: 24,
            textDecoration: 'none',
          }}
        >
          Mastodon
        </a>
        <a
          href="https://twitter.com/drumsensei"
          style={{
            boxShadow: 'none',
            color: 'inherit',
            fontWeight: 500,
            marginRight: 24,
            textDecoration: 'none',
          }}
        >
          Twitter
        </a>
        <a
          href="https://github.com/m2mathew/"
          style={{
            boxShadow: 'none',
            color: 'inherit',
            fontWeight: 500,
            marginRight: 24,
            textDecoration: 'none',
          }}
        >
          GitHub
        </a>
      </div>
    </footer>
  )
};

export default Footer
