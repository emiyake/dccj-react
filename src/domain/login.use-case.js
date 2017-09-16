import AccountResource from '../resources/account.resource.js'

class LoginUseCase {
  constructor(props) {
    this.execute = this.execute.bind(this)
  }

  static execute(username, password) {
    return AccountResource.login(username, password)
  }
}

export default LoginUseCase