const html = require('bel')
const Component = require('nanocomponent')
const morph = require('nanomorph')
const inherits = require('util').inherits

module.exports = Grid
inherits(Grid, Component)

function Grid () {
  Component.call(this)
  this.height = null
  this.width = null
  this.cellHeight = null
  this.cellWidth = null
}

Grid.prototype._render = function (opts) {
  const height = this.height = opts.height
  const width = this.width = opts.width
  const cellHeight = this.cellHeight = opts.cellHeight
  const cellWidth = this.cellWidth = opts.cellWidth

  const columns = Math.ceil(width / cellWidth)
  const rows = Math.ceil(height / cellHeight)
  const el = html`
    <g stroke="hsl(0, 0%, 40%)" fill="hsl(0, 0%, 20%)">
      <rect width=${width} height=${height} />
      ${Array(columns).fill(0).map((_, i) => html`
        <line x1=${i*cellWidth} x2=${i*cellWidth} y1=0 y2=${height}>
      `)}
      ${Array(rows).fill(0).map((_, i) => html`
        <line x1=0 x2=${width} y1=${i*cellHeight} y2=${i*cellHeight}>
      `)}
    </g>
  `
  if (this._element) morph(this._element, el)
  else this._element = el
  return el
}

Grid.prototype._update = function (opts) {
  return opts.height !== this.height
    || opts.width !== this.width
    || opts.cellHeight !== this.cellHeight
    || opts.cellWidth !== this.cellWidth
}
