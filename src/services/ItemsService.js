import Api from '@/services/Api'

export default {
  index () {
    return Api().get('items')
  },
  post (item) {
    return Api().post('items', item)
  }
}
