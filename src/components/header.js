import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ContainerStyles from "./header.module.css"
import Jumbo from "./jumbo"
import { Navbar, NavDropdown, Nav } from "react-bootstrap"

const Header = () => (
  <>
    <StaticQuery
      query={graphql`
        query {
          allWordpressMenusMenusItems(filter: { slug: { eq: "main-menu" } }) {
            edges {
              node {
                items {
                  title
                  slug
                  url
                  child_items {
                    title
                    url
                    slug
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const menuItems = data.allWordpressMenusMenusItems.edges[0].node.items
        console.log(menuItems)
        return (
          <Navbar expand="lg" variant="dark" className={ContainerStyles.main}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {menuItems.map(m => {
                  if (m.child_items) {
                    //We want to return a nested dropdown
                    return (
                      <NavDropdown
                        title={m.title}
                        id="nav-dropdown"
                        key={m.slug}
                        className={ContainerStyles.dropdowncontainer}
                      >
                        {m.child_items.map(n => {
                          return (
                            <NavDropdown.Item
                              href={n.url}
                              key={n.slug}
                              className={ContainerStyles.dropdown}
                            >
                              {n.title}
                            </NavDropdown.Item>
                          )
                        })}
                      </NavDropdown>
                    )
                  } else {
                    return (
                      <Nav.Link
                        href={m.url}
                        className="text-light"
                        key={m.slug}
                      >
                        {m.title}
                      </Nav.Link>
                    )
                  }
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
      }}
    />
    <Jumbo />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
