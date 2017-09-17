import Api from '@/services/Api'

export default {
  index () {
    return Api().get('releases')
  },
  show (releaseId) {
    return Api().get(`releases/${releaseId}`)
  },
  post (release) {
    return Api().post('releases', release)
  }
}
