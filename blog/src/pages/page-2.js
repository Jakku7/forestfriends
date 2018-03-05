import React from 'react'
import Link from 'gatsby-link'

export default class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div>
        <div>
            <ul>
            {this.props.data.allStrapiArticle.edges.map(document => (
                <li key={document.node.id}>
                  <h2>
                    <Link to={`/${document.node.id}`}>{document.node.title}</Link>
                  </h2>
                   <p>{document.node.content}</p>
                </li>
              ))}
            </ul>
          <Link to="/">Go back to the homepage</Link>
        </div>
        <p>{this.props.data.allStrapiArticle.edges[1].node.title}</p>
    </div>
    ); 
  }
}

export const secondQuery = graphql`  
  query secondIndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`