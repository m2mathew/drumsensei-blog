// External Dependencies
import React from 'react'

// Internal Dependencies
import { rhythm } from '../utils/typography'

// Local Variables
const PrestoDarkPurple = '#280154';

// Component Definition
class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: 'lavenderblush',
          borderTop: `1px solid ${PrestoDarkPurple}`,
          display: 'flex',
          fontSize: '0.9rem',
          marginTop: rhythm(1),
          padding: rhythm(0.75),
        }}
      >
        &copy; 2019 Drumsensei Media
      </footer>
    )
  }
}

export default Footer
