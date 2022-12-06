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
        <a rel="me" href="https://mstdn.social/@drumsensei">Mastodon</a>
      </div>
    </footer>
  )
};

export default Footer
