import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import ContainerStyles from "./page.module.css"
import SEO from "../../components/seo"

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage
    const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPage
    const url = this.props.location.href ? this.props.location.href : "/"
    console.log(this.props.data)
    return (
      <>
        <SEO title={StaticPage.title} />

        <Layout>
          <div className={ContainerStyles.container}>
            <Link to={url}>
              <h1 dangerouslySetInnerHTML={{ __html: StaticPage.title }} />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: StaticPage.content }} />
          </div>
        </Layout>
      </>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
