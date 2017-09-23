const {
  Recent,
  Release,
  User
} = require('../models')

const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const recents = await Recent.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Release
          }
        ]
      }).map(recent => recent.toJSON())
        .map(recent => _.extend(
          {},
          recent.Release,
          recent
        ))

      res.send(_.uniqBy(recents, recent => recent.ReleaseId))
    } catch (err) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {releaseId} = req.body
      const recent = await Recent.create({
        ReleaseId: releaseId,
        UserId: userId
      })
      res.send(recent)
    } catch (err) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  }
}
