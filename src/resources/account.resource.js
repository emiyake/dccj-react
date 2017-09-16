import Rx from 'rxjs/Rx'

class AccountResource {
  constructor(props) {
    this.login = this.login.bind(this)
  }

  static login(username, password) {
    console.log('username', username)
    console.log('password', password)
    return Rx.Observable.of({
      name: 'Davi',
      email: 'davicorreiajr@gmail.com',
      id: 589693730
    })
  }
}

export default AccountResource