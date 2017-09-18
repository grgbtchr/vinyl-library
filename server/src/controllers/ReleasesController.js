const {Release} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let releases = null
      const search = req.query.search
      if (search) {
        releases = await Release.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'label'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        releases = await Release.findAll({
          limit: 30
        })
      }
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
  },
  async put (req, res) {
    try {
      const release = await Release.update(req.body, {
        where: {
          id: req.params.releaseId
        }
      })
      res.send(req.body)
    } catch (error) {
      res.status(500).send({
        error: 'Oops! Something went wrong'
      })
    }
  }
}
