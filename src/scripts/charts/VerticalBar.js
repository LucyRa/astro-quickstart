import * as d3 from 'd3'
import { setInstanceElement } from './utils'

export default class VerticalBar {
  constructor (name, data) {
    this.name = name || "test"
    this.dta = data || [{}]
    this.el = null
    this.dimensions = { width: 500, height: 375 }
  }

  #buildChartSvg () {
    
  }

  init () {
    this.el = setInstanceElement(this.name, 'vertical-bar')

    let svg = this.#buildChartSvg()
    this.el.append(svg)
  }
}