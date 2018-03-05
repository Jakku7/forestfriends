import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: 'rgb(251, 211, 159)',
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#4d2b12',
            textDecoration: 'none',
          }}
        >
          schmiede.one
        </Link>
      </h1>
    </div>
  </div>
)

export default Footer
