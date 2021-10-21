import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import ExcelJS from 'exceljs'
import User from 'App/Models/User'

export default class DataSheetsController {
  public async index({}: HttpContextContract) {
    const users = (await User.all()).reverse()
    const usersSerialized = users.map((user) => {
      return user.serialize()
    })
    const xlxs = new ExcelJS.Workbook()
    const workSheet = xlxs.addWorksheet('Data USER')
    workSheet.columns = [
      { header: 'Id', key: 'id' },
      { header: 'Nome', key: 'nome' },
      { header: 'Sobrenome', key: 'sobrenome' },
    ]
    workSheet.addRows(usersSerialized)
    await xlxs.xlsx.writeFile(Application.tmpPath('File.xlsx'))
  }
}
