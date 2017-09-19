const {
  Recent,
  Release,
  User
} = require('../models')

const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
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

      res.send(recents)
    } catch (err) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  },
  async post (req, res) {
    try {
      const {releaseId, userId} = req.body
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
