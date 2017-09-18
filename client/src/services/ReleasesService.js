import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('releases', {
      params: {
        search: search
      }
    })
  },
  show (releaseId) {
    return Api().get(`releases/${releaseId}`)
  },
  post (release) {
    return Api().post('releases', release)
  },
  put (release) {
    return Api().put(`releases/${release.id}`, release)
  }
}
