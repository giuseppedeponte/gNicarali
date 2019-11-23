import BlogIndex from "../../components/BlogIndex"

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [fields___slug], order: DESC }
      limit: 1000
      filter: { frontmatter: { lang: { eq: "es" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            lang
            cover_url
          }
        }
      }
    }
  }
`
