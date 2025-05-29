// External Dependencies
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link'
import React from 'react'
import { graphql } from 'gatsby'

// Internal Dependencies
import Layout from '../components/Layout'

// Component Definition
const About = (props) => {
  const siteDescription = props.data.site.siteMetadata.description;

  return (
    <Layout description={siteDescription} location={props.location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title="About"
      />

      <div>
        <section>
          <h3>Howdy! I’m Michael D. Mathew</h3>
          <p>
            But most people call me Mike. I’m a developer/designer & musician
            based out of the Dallas/Fort Worth area. I like to make pretty
            things that help people. Since December 2015 I have worked as a
            software engineer at{' '}
            <a href="https://www.text-em-all.com/">Text-Em-All</a> in Frisco, TX (formerly named Call-Em-All). I also help organize the{' '}
            <a href="https://www.meetup.com/ReactJS-Dallas/">
              ReactJS Dallas software meetup
            </a>
            . My software development career kicked off at the (former) code
            school in Austin, Texas called The Iron Yard. In ye olde pre-pandemic times,
            I occasionally helped mentor young coding ninjas at the{' '}
            <a href="https://dojo.call-em-all.com/">Frisco Coder Dojo</a>.
          </p>
          <p>
            In late 2018 I co-founded{' '}
            <a href="https://www.presto-assistant.com/">Presto Assistant</a>, a
            service to help fine arts teachers organize their logistics and
            office. This app makes the lives of fine arts teachers
            better by helping them get and stay organized. It's been a lot of fun
            to build a product that helps teachers have a better day!
          </p>
          <p>
            As a longtime musician and music educator I worked with some
            terrific programs as a performer and teacher. The list is long but
            includes such powerhouses as Texas A&amp;M University-Commerce
            (now East Texas A&amp;M University),
            Berkner High School, North Mesquite High School, Trinity High
            School, Forney High School, Flower Mound High School, Texas Christian University,
            University of Texas at Arlington, and several others all over the
            state of Texas. On occasion I can be seen hitting drums or marimbas
            or timpani and sometimes even get to write music for other people
            and groups. I get to play drums at church some
            weekends, so my funky beats continue to thrive.
          </p>
          <p>
            My most important work: husband to my lovely wife, father to my
            three wonderful children, and big brother to many half-siblings. I
            enjoy any good music, Apple computers and products, and the Oxford
            comma. By night I stay up learning everything that I don't yet know,
            or I'm reading about how I should be sleeping more. My family and
            friends are awesome and a continual blessing in my life.
          </p>
        </section>

        <section>
          <h3>Find Me</h3>
          <p>
            I post on Mastodon as{' '}
            <a href="https://mstdn.social/@drumsensei">@drumsensei</a>.
            I spend a good bit of time in the open-source awesomeness of{' '}
            <a href="https://github.com/m2mathew">GitHub</a>, too.
          </p>
        </section>

        <section>
          <h3>Colophon</h3>
          <p>
            <a href="/uses">Uses</a> - links to many of the things I use
          </p>
          <p>
            This site is built with <a href="">GatsbyJS</a> which means most
            content was written using{' '}
            <a href="https://daringfireball.net/projects/markdown/">Markdown</a>{' '}
            and <a href="">ReactJS</a>. The original incarnation of the site was
            a <a href="http://realmacsoftware.com/rapidweaver/">RapidWeaver</a>{' '}
            project. After a brief rewrite in Jekyll, we ended up here! A rewrite in{' '}
            <a href="https://www.11ty.dev/">eleventy</a> has been rumored, but not verified.
            Hosting by{' '}
            <a href="https://www.netlify.com/">Netlify</a>. Coding is done in{' '}
            <a href="https://code.visualstudio.com/">Visual Studio Code</a>{' '}
            (with generous assistance from the dev tools). I use a 2025 16"
            M4 MacBook Pro — it's the best machine I've ever used — and a couple of
            Apple Studio Displays.
          </p>

          <p>
            As a constant learner, I will likely be poking and
            prodding here and there throughout this space, so it might not
            always look the same. Also, there is little guarantee that it will
            appear correctly on older browsers, so{' '}
            <a href="https://browsehappy.com">keep them up to date</a>!
          </p>
        </section>

        <section>
          <h3>Why Drumsensei?</h3>
          <p>
            When I taught at Trinity High School in Euless, TX, I referred to the performers in
            the cymbal line as the "cymbal ninjas". They were an all-female,
            extremely intelligent, no-nonsense group of people. All of the
            extraordinary moves and sounds they made were superbly
            choreographed, and they did not put up with any halfway effort.
            After some interval of time, all of the students began to call me
            "sensei." So, <strong>drumsensei</strong> seems appropriate.
          </p>
        </section>
        <hr />
        <Link to="/">Go dig through some posts</Link>
      </div>
    </Layout>
  )
};

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`
