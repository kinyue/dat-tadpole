
var xtend = Object.assign

module.exports = loginModel

function loginModel (state, bus) {
    
    var update = bus.emit.bind(bus, 'show')

    state.login = xtend({}, state.login, {
        show: true
      })

    bus.on('login:toverify', function() {
        state.login.show = true
        bus.emit('render')
    })

    bus.on('login:verified', function() {
        state.login.show = false
        bus.emit('render')        
    })

}