const {
  sequelize,
  Release,
  User,
  Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const releases = require('./releases.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      releases.map(release => {
        Release.create(release)
      })
    )

    await Promise.all(
      bookmarks.map(bookmark => {
        Bookmark.create(bookmark)
      })
    )
  })
