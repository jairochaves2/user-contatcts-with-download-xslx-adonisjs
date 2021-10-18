import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Contato from 'App/Models/Contato'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome: string

  @column()
  public sobrenome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Contato)
  public contatos: HasMany<typeof Contato>
}
