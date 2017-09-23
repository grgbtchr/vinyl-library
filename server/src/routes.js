const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ReleasesController = require('./controllers/ReleasesController')
const BookmarksController = require('./controllers/BookmarksController')
const RecentsController = require('./controllers/RecentsController')

const isAuthenticated = require('./policies/isAuthenticated')

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
    isAuthenticated,
    BookmarksController.index)

  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.delete)


  app.get('/recents',
    isAuthenticated,
    RecentsController.index)

  app.post('/recents',
    isAuthenticated,
    RecentsController.post)
}
