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

  
//---------------------------------
  #setInstanceEl ()
    : Element | null 
  {
    let tableEl = document.querySelector(`#data-table-${this.name}`)

    if (!tableEl) console.warn('Data Table, setInstanceEl(): No table element')

    return tableEl;
  }


  #buildTableHead () 
    : Element | null | void[]
  {
    let tableHead = document.createElement('thead')

    let tableHeaders = Array.from(this.data?.headers, header => {
      let thEl = document.createElement('th')
      thEl.innerHTML = `<h3>${header}</h3>`

      tableHead.appendChild(thEl);
    })
    return tableHead || null;
  }


  #buildTableBody () : Element | null | void[] {
    let tableBodyEl = document.createElement('tbody')

    Array.from(this.data?.rows, (row) => {
      let trEl = document.createElement('tr')

      Array.from(Object.entries(row), (k, v) => {
        let tdEl = document.createElement('td')
        tdEl.innerHTML = `${k}: ${v}`

        trEl.appendChild(tdEl)
      })

     tableBodyEl.appendChild(trEl);
    })

    return tableBodyEl || null;
  }

  #buildTable (
    header: Element | null | void[],
    body: Element | null | void[]
  ) 
    : any 
  {
    if (!header) return console.warn();



    if (!body) {

    } else {

    }
  }


  //---------------------------------
  init () {
    this.el = this.#setInstanceEl()

    if (!this.el) return console.error('Data Table, init(): No target element')

    if (!this.data) return console.error('Data Table, init(): No data')

    if (!this.name) return console.error('Data Table, init(): No instance name')

    const tableHead = this.#buildTableHead()
    let tableBody = this.#buildTableBody()

    if (!tableHead || !tableBody) return console.error('DataTable, init(): Required elements missing');

    this.#buildTable(tableHead, tableBody)
  }
}

export { DataTable }