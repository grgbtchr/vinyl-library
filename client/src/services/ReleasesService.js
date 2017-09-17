import Api from '@/services/Api'

export default {
  index () {
    return Api().get('releases')
  },
  post (release) {
    return Api().post('releases', release)
  }
}
