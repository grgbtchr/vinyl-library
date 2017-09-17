const {Release} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const releases = await Release.findAll({
        limit: 30
      })
      res.send(releases)
    } catch (error) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  },
  async show (req, res) {
    try {
      const release = await Release.findById(req.params.releaseId)
      res.send(release)
    } catch (error) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  },
  async post (req, res) {
    try {
      const release = await Release.create(req.body)
      res.send(release)
    } catch (error) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  }
}
