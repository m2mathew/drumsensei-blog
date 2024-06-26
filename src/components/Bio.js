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
          borderBottom: '1px solid lavender',
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
          <a href="https://mstdn.social/@drumsensei" rel="me">
            Sometimes he posts on Mastodon
          </a>.{' '}
          Mike also wears many hats at <a href="https://www.presto-assistant.com/">Presto Assistant</a>{' '}
          where he is a co-founder, owner, and product engineer.
        </p>
      </div>
    )
  }
}

export default Bio
