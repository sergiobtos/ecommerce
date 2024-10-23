import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  public async index({ response }: HttpContext) {
    const products = await Product.all()
    return response.json(products)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'quantity', 'price', 'description'])
    const product = await Product.create(data)
    return response.status(201).json(product)
  }

  public async show({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    return response.json(product)
  }

  public async update({ params, request, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['name', 'quantity', 'price', 'description'])
    product.merge(data)
    await product.save()
    return response.json(product)
  }

  public async destroy({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
    return response.status(204).json(null)
  }
}
