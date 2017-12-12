
var html = require('choo/html')
var css = require('sheetify')
var icon = require('../elements/icon')
var microcomponent = require('microcomponent')

var button = require('./button')

var usernameValue = ''

var loginpage = css`
    :host {
        position: absolute;
        top: 3.5rem;
        left: 1.25rem;
        right: 1.25rem;
        height: 26rem;
    }
`

var overlay = css`
:host {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.2);
}
`

module.exports = LoginScreen

function LoginScreen () {

    var component = microcomponent({
        name: 'login',
        state: {
            login: false
        }
    })
    component.on('render', render)
    component.on('update', update)
    return component

    function render () {
        var { onlogin } = this.props
        
        component.state.login = true
        return html`
            <main class="${loginpage}">
                <img src="./assets/table-skeleton.svg" alt="" class="${loginpage}">
                <div class="tutorial">
                    <input name="username" type="text" placeholder="username" value="${usernameValue}" onchange="${changeUserName}">
                    <input name="password" type="text" placeholder="password">
                    <div>
                        ${button.green('Login', {
                            onclick: onlogin
                        })}
                    </div>
                </div>
            </main>
        `
    }

    function changeUserName(e){
        console.log('in change user name method')
        usernameValue = e.target.value
    }

    function update (props) {
        return true
      }

}