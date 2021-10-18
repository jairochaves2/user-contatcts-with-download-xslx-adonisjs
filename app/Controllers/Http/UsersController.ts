import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserStoreValidator from 'App/Validators/UserStoreValidator'
import UserUpdateValidator from 'App/Validators/UserUpdateValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(UserStoreValidator)
    return User.create(data)
  }

  public async show({ params }: HttpContextContract) {
    return await User.findOrFail(params.id)
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(UserUpdateValidator)
    const user = await User.findOrFail(params.id)
    await user.merge(data).save()
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
  }
}
