import { fruits } from '../data/fruit-data.js'

function index(req, res) {
  res.render('fruits/index', {
    fruits: fruits
  })
}

export {
  index
}