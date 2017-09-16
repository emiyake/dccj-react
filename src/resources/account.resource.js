import Rx from 'rxjs/Rx'

class AccountResource {
  constructor(props) {
    this.login = this.login.bind(this)
  }

  static login(username, password) {
    console.log('balaaaa')
    return Rx.Observable.of(true)
  }
}

export default AccountResource