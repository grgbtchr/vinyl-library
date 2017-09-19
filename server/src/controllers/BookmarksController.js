const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {releaseId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          ReleaseId: releaseId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  },
  async post (req, res) {
    try {
      const {releaseId, userId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          ReleaseId: releaseId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'You have already bookmarked this release'
        })
      }

      const newBookmark = await Bookmark.create({
        ReleaseId: releaseId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  }
}
