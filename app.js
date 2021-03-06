const persist = require('choo-persist')
const expose = require('choo-expose')
const log = require('choo-log')
const css = require('sheetify')
const choo = require('choo')
const xtend = Object.assign

require('./lib/monkeypatch')

css('dat-colors')
css('tachyons')
css('./assets/base.css')

const app = choo()

app.use(persist({
  filter: function (state) {
    return xtend({}, state, { dats: {} })
  }
}))

if (process.env.NODE_ENV === 'development') {
  app.use(log())
  app.use(expose())
}

app.use(require('./models/login'))
app.use(require('./models/intro'))
app.use(require('./models/inspect'))
app.use(require('./models/download'))
app.use(require('./models/drag-drop'))
app.use(require('./models/dats'))
app.use(require('./models/error'))

app.route('/', require('./pages/main'))

app.mount('body div')
