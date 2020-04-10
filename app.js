const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const config = {
    views: 'views',
    static: 'public',
    db: {
        url: 'mongodb://localhost/footballdb',
        type: 'mongo',
        onError: (err) => {
            console.log('DB Connection Failed!')
        },
        onSuccess: () => {
            console.log('FOOTBALL DB CONNECTED!')
        }
    }
}

const app = vertex.app(config)

const index = require('./routes/index')
const api = require('./routes/api')

app.use('/', index)
app.use('/api', api)

module.exports = app