import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Hash from '@adonisjs/core/services/hash'

export default class UsersController {

  public async store({ request, response }: HttpContext) {
    const data = request.only(['full_name', 'email', 'password'])
    const user = await User.create(data)
    return response.status(201).json(user)
  }

  public async signIn({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.query().where('email', email).firstOrFail()

    if (!(await Hash.verify(user.password, password))) {
      return response.status(401).json({ message: 'Invalid credentials' })
    }

    return response.json(user)
  }

  public async update({ params, request, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['full_name', 'email', 'password'])
    user.merge(data)
    await user.save()
    return response.json(user)
  }

  public async destroy({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.status(204).json(null)
  }
}
