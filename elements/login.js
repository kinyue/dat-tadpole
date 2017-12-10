
var html = require('choo/html')
var css = require('sheetify')
var microcomponent = require('microcomponent')

var button = require('./button')

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
            <div class="flex ml2">
                ${button.green('Login', {
                    onclick: onlogin
                })}
            </div>`
    }

    function update (props) {
        return true
      }

}