// External Dependencies
import Helmet from 'react-helmet'
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
          <p>
            <ul>
              <li>
                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
              </li>
            </ul>
          </p>
        </section>
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
