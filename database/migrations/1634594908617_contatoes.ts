import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Contatoes extends BaseSchema {
  protected tableName = 'contatoes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary
      table.string('numero').notNullable()
      table.enu('tipo', ['fixo', 'celular']).notNullable()
      table.integer('id_user').unsigned().references('id').inTable('users')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
