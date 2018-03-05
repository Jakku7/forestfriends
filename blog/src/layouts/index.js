import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Forest Friends"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { href: 'https://fonts.googleapis.com/css?family=Sigmar+One', rel: 'stylesheet'},
        { href: 'https://fonts.googleapis.com/css?family=Quattrocento+Sans', rel: 'stylesheet'}
    ]}   
    />
    <MuiThemeProvider>
      <Header />
      <div
        style={{
          margin: '0 auto',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      <Footer />
    </MuiThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
export const mainmenuQuery = graphql`  
  query MenuQuery {
    allStrapiMenu {
      edges {
        node {
          id
          address
          namedisplayed
        }
      }
    }
  }
`
