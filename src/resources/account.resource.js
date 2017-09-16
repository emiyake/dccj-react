import Rx from 'rxjs/Rx'

class AccountResource {
  constructor(props) {
    this.login = this.login.bind(this)
  }

  static login(username, password) {
    const shouldLogin = username === 'davi' && password === '123'
    console.log('username', username)
    console.log('password', password)
    return  shouldLogin ?
    Rx.Observable.of({
      name: 'Davi',
      email: 'davicorreiajr@gmail.com',
      id: 589693730
    }) :
    Rx.Observable.throw('Wrong username and/or password')
  }
}

export default AccountResource