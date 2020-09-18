import React from 'react'  
import Link from 'gatsby-link'

import Timeline from '../templates/timeline.js'
import Banner from '../templates/banner.js'

import './index.css'

const IndexPage = ({ data }) => (  
  <div>
    <Banner />
    <Timeline />
    <div className={"sectiontimeline"}>
        <div className={"timelinecontainer"}>
        <ul className={"timeline"}>
        {data && data.allStrapiRow && data.allStrapiRow.edges.map(document => (
          <li key={document.node.id} className={"timelinelines"}>
            <div className={"contentcontainer"} style={{ float: document.node.imagealignment === 'left' ? 'right' : 'left' }}>
              <div className={"heading"}>{document.node.heading}</div>
              <div className={"text"}>{document.node.content}</div>
            </div>
            <div className={"iconcontainer"}>{document.node.icon}</div>
            <div className={"imagecontainer"} style={{ float: document.node.imagealignment }}><div><img src={require('../img/' + document.node.image + '.png')} alt={document.node.image} title={document.node.image}/></div></div>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'center' }}><Link to="/stepper" title="Click here"><button className={"standard2"}>Click here</button></Link></div>
      </div>
    </div>
    <div className={"sectionnews"}>
        <div className={"newscontainer"}>
            <ul className={"articles"}>
              {data && data.allStrapiArticle && data.allStrapiArticle.edges.map(document => (
                <li key={document.node.id} className={"articlelines"}>
                  <div className={"imagecontainer"}><img src={require('../img/' + document.node.image + '.png')} alt={document.node.image} title={document.node.image}/></div>
                  <div className={"contentcontainer"}>
                      <h2><Link to={`/${document.node.id}`}>{document.node.title}</Link></h2>
                      <p>{document.node.content.substring(0,120) + '...'}</p>
                  </div>
                </li>
              ))}
            </ul>
        </div>
    </div>
  </div>
)
export default IndexPage
export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          image
        }
      }
    }
   allStrapiRow {
    edges {
        node {
            id
            image
            content
            heading
            imagealignment
            }
        }
    }
  }
`