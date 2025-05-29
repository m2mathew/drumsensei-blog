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
      <div className="footer-copyright">
        &copy; {currentYear}{' '}
        <span style={{ whiteSpace: 'pre' }}>
          Drumsensei Media
        </span>
      </div>

      <div>
        <a
          className="footer-link"
          href="https://mstdn.social/@drumsensei"
          rel="me"
        >
          Mastodon
        </a>
        <a
          className="footer-link"
          href="https://github.com/m2mathew/"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
};

export default Footer
