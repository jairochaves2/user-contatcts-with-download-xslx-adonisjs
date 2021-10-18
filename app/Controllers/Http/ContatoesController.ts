import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contato from 'App/Models/Contato'
import ContactStoreValidator from 'App/Validators/ContactStoreValidator'
import ContatactUpdateValidator from 'App/Validators/ContactUpdateValidator'

export default class ContatoesController {
  public async index({}: HttpContextContract) {
    return await Contato.all()
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(ContactStoreValidator)
    return Contato.create(data)
  }

  public async show({ params }: HttpContextContract) {
    return await Contato.findOrFail(params.id)
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(ContatactUpdateValidator)
    const contact = await Contato.findOrFail(params.id)
    await contact.merge(data).save()
  }

  public async destroy({ params }: HttpContextContract) {
    const contact = await Contato.findOrFail(params.id)
    await contact.delete()
  }
}
