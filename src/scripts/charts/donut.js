import * as d3 from 'd3';

class Donut {
  constructor (name, data) {
    this.name = name || "test"
    this.data = data || [{
      name: 'test-1',
      count: 280
    },
    {
      name: 'test-2',
      count: 60
    },
    {
      name: 'test-3',
      count: 20
    },]
    this.el = null
    this.dimensions = { width: 0, radius: 0 }
  }

  // TODO: Turn into a promise...
  setInstanceElement (name) {
    if (!name) return console.warn('Donut, instance element: No name');

    let targetEl = document.querySelector(`#donut-chart-${name}`)
    if (!targetEl) return console.warn('Donut, instance element: No target element');

    this.el = targetEl;
  }

  setInstanceDimensions (el) {
    if (!el) return console.warn('Donut, instance dimensions: No target element');

    this.dimensions.width = el.outerWidth
    this.dimensions.radius = this.dimensions.width / 2;
  }


  buildChart () {
    const arc = d3.arc()
      .innerRadius(this.dimensions.radius * 0.8)
      .outerRadius(this.dimensions.radius)
      .cornerRadius(6)

    const pie = d3.pie()
      .padAngle(0.024)
      .sort(null)
      .value(d => d.count)

    const colours = d3.scaleOrdinal(
      this.data.map(d => d.name), d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), 
      this.data.length
    ).reverse())

    const svg = d3.create('svg')
      .attr('width', this.height)
      .attr('height', this.height)
      .attr("viewBox", [-this.height / 2, -this.height / 2, this.height, this.height])
      .attr("style", "max-width: 100%; height: auto;")

    svg.append('g')
      .selectAll()
      .data(pie(this.data))

    console.log(svg)
  }

  init () {
    console.log('Donut: init()')
    this.setInstanceElement(this.name)

    this.buildChart()
  }


}

export { Donut };