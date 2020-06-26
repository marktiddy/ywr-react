import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const url = this.props.location.href ? this.props.location.href : "/"

    return (
      <>
        <Layout>
          <a href={url}>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          </a>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Layout>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      slug
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
