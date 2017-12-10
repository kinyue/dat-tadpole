
var xtend = Object.assign

module.exports = loginModel

function loginModel (state, bus) {
    state.login = xtend({
        show: true
    }, state.login)

    bus.on('login:toverify', function() {
        state.login.show = true
        bus.emit('render')
    })

    bus.on('login:verified', function() {
        state.login.show = false
        bus.emit('render')        
    })

}