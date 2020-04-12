require('dotenv').config()

const express = require('express')
const register = require('@react-ssr/express/register')
const methodOverride = require('method-override')
const PORT = process.env.PORT | 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static('public'))
app.use(methodOverride('_method'))

const run = async () => {
  await register(app)

  // app.get('/', (req, res) => {
  //   const user = { name: 'Bulma' }
  //   res.render('index', { user })
  // })
  const ingredientRouter = require('./routes/ingredients')


  app.use('/ingredients', ingredientRouter)

  app.listen(PORT, () => {
    console.log('> Ready on http://localhost:' + PORT)
  })

}

run()