const {
  sequelize,
  Release,
  User,
  Bookmark,
  Recent
} = require('../src/models')

const Promise = require('bluebird')
const releases = require('./releases.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const recents = require('./recent.json')

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

    await Promise.all(
      recents.map(recent => {
        Recent.create(recent)
      })
    )
  })
