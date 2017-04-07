const html = require('bel')
const Grid = require('.')

const grid = new Grid()

document.body.appendChild(
  html`
  <svg height=200 width=400>
    ${grid.render({ height: 201, width: 401, cellHeight: 5, cellWidth: 10 })}
  </svg>  
`
)
