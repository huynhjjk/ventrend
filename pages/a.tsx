import React from 'react'
import fetch from 'isomorphic-unfetch'

const A = (props:any) => (
  <div>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </div>
)

A.getInitialProps = async function(context: any) {
  const { id } = context.query
  const res = await fetch(`http://localhost:3000/a`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default A