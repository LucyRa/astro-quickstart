import * as d3 from 'd3';

const initDonut = (donutChartEl) => {
  if (donutChartEl) {
    console.log('Init Donut :)')

    // Declare chart dimensions & margins
    let width = donutChartEl.parentElement.clientWidth ?? 500
    let pieDimensions = { h: width, w: width, r: halfWidth }
    let pieCenter = { x: halfWidth, y: halfWidth }

    let arc = d3.arc()
      .innerRadius(pieDimensions.r * 0.8)
      .outerRadius(pieDimensions.r)

  } else {
    console.warn('Init Donut: No element.');
    return;
  }
}
export { initDonut };