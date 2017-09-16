class AccountResource {
  constructor(props) {
    this.login = this.login.bind(this)
  }

  static login(username, password) {
    console.log('balaaaa')
  }
}

export default AccountResource