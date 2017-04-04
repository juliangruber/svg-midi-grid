const html = require('bel')

module.exports = ({
  height,
  width,
  cellHeight,
  cellWidth
}) => {
  const columns = Math.ceil(width / cellWidth)
  const rows = Math.ceil(height / cellHeight)
  return html`
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
}
