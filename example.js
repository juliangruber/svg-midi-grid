const html = require('bel')
const grid = require('.')

document.body.appendChild(html`
  <svg height=200 width=400>
    ${grid({
      height: 201,
      width: 401,
      cellHeight: 5,
      cellWidth: 10
    })}
  </svg>  
`)
