// External Dependencies
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link'
import React from 'react'
import { graphql } from 'gatsby'

// Internal Dependencies
import Layout from '../components/Layout'

// Component Definition
const Uses = (props) => {
  const siteDescription = props.data.site.siteMetadata.description;

  return (
    <Layout description={siteDescription} location={props.location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title="Uses"
      />
      <div>
        <section>
          <h3>Things I use for my work 🚀</h3>
          <div>
            <h4>Editor</h4>
            <ul>
              <li>
                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
              </li>
              <li>
                <a href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl&WT.mc_id=twitter-social-sdras">Night Owl</a> editor theme by <a href="https://twitter.com/sarah_edo">Sarah Drasner</a>
              </li>
              <li>
                <a href="https://marketplace.visualstudio.com/items?itemName=wart.ariake-dark">Ariake Dark</a> editor theme by wart
              </li>
              <li>
                <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a> typeface by <a href="https://www.jetbrains.com/">JetBrains</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Desktop Apps</h4>
            <ul>
              <li>
                <a href="https://www.google.com/chrome">Google Chrome</a> - for most web development
              </li>
              <li>
                <a href="https://www.mozilla.org/en-US/firefox/">Firefox</a> - for most casual browsing
              </li>
              <li>
                <a href="https://1password.com/">1Password</a> - never reuse a password!
              </li>
              <li>
                <a href="https://justgetflux.com/">Flux</a> - Reduces some of the blue light from the monitor
              </li>
              <li>
                <a href="https://www.spectacleapp.com/">Spectacle</a> - Quickly move your windows anywhere you want
              </li>
              <li>
                <a href="https://www.macbartender.com/">Bartender</a> - Keeps me from accidentally hitting the touch bar on the Mac keyboard
              </li>
              <li>
                <a href="https://iterm2.com/">iTerm</a> - terminal for command line interface
              </li>
              <li>
                <a href="https://slack.com/">Slack</a> - Communicate with a team or a community
              </li>
              <li>
                <a href="https://meet.google.com/">Google Meet</a> - Video calls for work
              </li>
              <li>
                <a href="https://zoom.us/">Zoom.us</a> - Non-work video calls
              </li>
              <li>
                <a href="https://hey.com/">HEY!</a> - Email app that makes email fun again!
              </li>
            </ul>
          </div>
          <div>
            <h4>Mobile Apps</h4>
            <ul>
              <li>
                <a href="https://overcast.fm/">Overcast</a> - The only way I listen to podcasts
              </li>
              <li>
                <a href="https://www.sleepcycle.com/">Sleep Cycle</a> - The best way to wake up every day
              </li>
              <li>
                <a href="https://1password.com/">1Password</a> - never reuse a password!
              </li>
              <li>
                <a href="https://hey.com/">HEY!</a> - Email app that makes email fun again!
              </li>
            </ul>
          </div>
          <div>
            <h4>Desktop Setup</h4>
            <ul>
              <li>
                <a href="https://www.apple.com/macbook-pro-16/">MacBook Pro (16-inch, 2019)</a> - it's a lovely laptop
              </li>
              <li>
                <a href="https://www.autonomous.ai/standing-desks/smartdesk-2-business?option1=3&option2=5&option16=37&option17=41">Standing desk</a> from Autonomous
              </li>
              <li>
                <a href="https://grovemade.com/product/wood-monitor-stand/?initial=64">Monitor Stand</a> from <a href="https://grovemade.com/">Grovemade</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>On the Go</h4>
            <ul>
              <li>
                <a href="https://www.apple.com/iphone-11-pro/">iPhone 11 Pro (256GB)</a>
              </li>
              <li>
                <a href="https://www.tombihn.com/collections/backpacks/products/synapse-25?variant=31746848161855">Synapse 25 backpack</a> from <a href="https://www.tombihn.com/">Tom Bihn</a> - One of many items our family has from Tom Bihn, all high-quality and made in the USA
              </li>
              <li>
                <a href="https://www.tombihn.com/collections/facemasks">Face masks</a> from <a href="https://www.tombihn.com/">Tom Bihn</a> - High-quality and good design with an extra loop to let the mask "dangle" around your neck when not in use
              </li>
            </ul>
          </div>
        </section>
        <hr />
        <Link to="/">Go dig through some posts</Link>
      </div>
    </Layout>
  )
};

export default Uses


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`
