const html = require('bel')
const component = require('microcomponent')

module.exports = () => {
  const c = component({
    name: 'svg-midi-grid',
    pure: true
  })
  c.on('render', () => {
    const columns = Math.ceil(c.props.width / c.props.cellWidth)
    const rows = Math.ceil(c.props.height / c.props.cellHeight)
    return html`
      <g
        stroke="hsl(0, 0%, 30%)"
        fill="hsl(0, 0%, 20%)"
        transform="translate(${c.props.x || 0}, ${c.props.y || 0})"
      >
        <rect width=${c.props.width} height=${c.props.height} />
        ${Array(rows).fill(0).map((_, i) => html`
          <line x1=0 x2=${c.props.width} y1=${i * c.props.cellHeight} y2=${i * c.props.cellHeight}>
        `)}
        ${Array(columns).fill(0).map((_, i) => html`
          <line
            x1=${i * c.props.cellWidth}
            x2=${i * c.props.cellWidth}
            y1=0
            y2=${c.props.height}
            stroke=${i % 4 === 0
              ? 'hsl(0, 0%, 35%)'
              : ''}
          >
        `)}
      </g>
    `
  })
  return c
}
