// External Dependencies
import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './mike-avatar.jpeg'
import { rhythm } from '../utils/typography'

// Component Definition
class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt="Michael D. Mathew."
          style={{
            borderRadius: 50,
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong><a href="https://www.mikemathew.com/">Mike Mathew</a></strong> who lives and works in Dallas building useful things.{' '}
          <a href="https://twitter.com/drumsensei">
            Sometimes he tweets.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
