const Excel = require('exceljs')

async function csvToExcel() {
	const workbook = new Excel.Workbook()
	const worksheet = await workbook.csv.readFile('data.csv')

	// replace all the ?s in the CSV with empty cells
	worksheet.eachRow(row => {
		row.eachCell(cell => {
			if (cell.value === '?') {
				cell.value = null
			}
		})
	})

	await workbook.xlsx.writeFile('data.xlsx')	
}

csvToExcel()
