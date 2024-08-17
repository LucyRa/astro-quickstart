class DataTable {
  el: Element | null
  name: string | undefined
  data: {
    headers: Array<string>,
    rows: Array<object>
  }

  constructor (name: string, data: {headers: string[], rows: object[]}) {
    this.el = null
    this.name = name
    this.data = data
  }

  #setInstanceEl ()
    : Element | null 
  {
    let tableEl = document.querySelector(`#data-table-${this.name}`)

    if (!tableEl) console.warn('Data Table, setInstanceEl(): No table element')

    return tableEl;
  }

  #buildTableHeaders () 
    : Array<Element> | null 
  {
    let tableHeaders = Array.from(this.data?.headers, header => {
      let thEl = document.createElement('th')
      thEl.innerHTML = `<h3>${header}</h3>`
    })
    return tableHeaders || null;
  }

  #buildTableRows () : Array<Element> | null {
    let tableRows = Array.from(this.data?.rows, row => {
      let trEl = document.createElement('tr')

      let tdEls = Array.from(row, d => {
        let tdEl = document.createElement('td')
        tdEl.innerHTML = d
      })
    })
    return;
  }

  init () {
    this.el = this.#setInstanceEl()

    if (!this.el) return console.error('Data Table, init(): No target element')

    if (!this.data) return console.error('Data Table, init(): No data')

    if (!this.name) return console.error('Data Table, init(): No instance name')

    const tableHeaders = this.#buildTableHeaders()
    let tableRows = this.#buildTableRows()
  }
}

export { DataTable }