import Route from '@ioc:Adonis/Core/Route'

Route.resource('users', 'UsersController')
Route.resource('contacts', 'ContatoesController')
Route.get('xlsx', 'DataSheetsController.index')
