import { initDonut } from "./donut";

export default function charts () {
  console.log('Charts :)')

  let donutChartEls = document.querySelectorAll('[data-chart-donut]')
  console.log(donutChartEls)
  if (donutChartEls) {
    Array.from(donutChartEls, donutChartEl => {
      initDonut(donutChartEl)
      return;
    })
  }
}