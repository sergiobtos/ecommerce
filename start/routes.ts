/*
|--------------------------------------------------------------------------
| routers file
|--------------------------------------------------------------------------
|
| The routers file is used for defining the HTTP routers.
|
*/

import router from '@adonisjs/core/services/router'
const ProductsController = () => import('#controllers/products_controller')
const UsersController = () => import('#controllers/users_controller')

// Product routers
router
  .group(() => {
    router.get('products', [ProductsController, 'index'])
    router.post('products', [ProductsController, 'store'])
    router.get('products/:id', [ProductsController, 'show'])
    router.put('products/:id', [ProductsController, 'update'])
    router.delete('products/:id', [ProductsController, 'destroy'])
  })
  .prefix('api')

// User routers
router
  .group(() => {
    router.post('users', [UsersController, 'store'])
    router.post('users/signin', [UsersController, 'signIn'])
    router.put('users/:id', [UsersController, 'update'])
    router.delete('users/:id', [UsersController, 'destroy'])
  })
  .prefix('api')
