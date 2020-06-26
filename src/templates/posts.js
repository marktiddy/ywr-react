import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"

class Post extends Component {
  render() {
    const postData = this.props.data.allWordpressPost

    return (
      <>
        <Layout>
          <h1>Posts Page</h1>
          {postData.edges.map(({ node }) => {
            return (
              <div key={node.slug}>
                <Link to={node.slug}>
                  <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
                </Link>

                <p>Posted at {node.date}</p>
              </div>
            )
          })}
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

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
