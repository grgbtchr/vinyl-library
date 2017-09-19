const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ReleasesController = require('./controllers/ReleasesController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/releases',
    ReleasesController.index)

  app.get('/releases/:releaseId',
    ReleasesController.show)

  app.put('/releases/:releaseId',
    ReleasesController.put)

  app.post('/releases',
    ReleasesController.post)

  app.get('/bookmarks',
    BookmarksController.index)

  app.post('/bookmarks',
    BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete)
}
