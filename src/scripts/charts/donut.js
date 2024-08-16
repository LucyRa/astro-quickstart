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
    this.dimensions = { width: 500, radius: 250 }
    this.tau = Math.PI * 2
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
    this.dimensions.radius = this.dimensions.radius;
  }


  buildChartSvg () {
    const svg = d3.create('svg')
      .attr('width', this.dimensions.width)
      .attr('width', this.dimensions.width)
      .attr("viewBox", [-this.dimensions.radius, -this.dimensions.radius, this.dimensions.width, this.dimensions.width])
      .attr("style", "max-width: 100%; width: auto;")

    const g = svg.append('g')

    const arc = d3.arc()
      .innerRadius(this.dimensions.radius * 0.8)
      .outerRadius(this.dimensions.radius)
      .cornerRadius(6)

    const arcBg = g.append('path')
      .datum({ endAngle: this.tau })
      .style('fill', '#eeeeee')
      .attr('d', arc)

    const pie = d3.pie()
      .padAngle(0.024)
      .sort(null)
      .value(d => d.count)

    const colourScheme = ['#9F1654', '#29B298', '#378A3E', '#2781B9', '#E67D1E', '#222145', '#DFC13F', '#806FB0', '#EE78A6', '#0B705A']

    const colours = d3.scaleOrdinal()
      .domain(this.data.map(d => d.name))
      .range(colourScheme)

    const gData = svg.append('g')
    gData.selectAll('path')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('fill', d => colours(d.data.name))
      .transition()
      .duration(750)
      .attrTween('d', (d) => {
        const i = d3.interpolate(d.startAngle, d.endAngle);
    
        return (t) => {
          d.endAngle = i(t);
          return arc(d);
        };
      })

    return svg.node();
  }

  init () {
    console.log('Donut: init()')
    this.setInstanceElement(this.name)

    let svg = this.buildChartSvg()
    this.el.append(svg);
  }


}

export { Donut };