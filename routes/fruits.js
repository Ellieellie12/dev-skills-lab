import { Router } from 'express'
import { fruits } from '../data/fruit-data.js'

const router = Router()

router.get('/', function(req,res){
  res.render('fruits/index', {
    fruits: fruits
  })
})


export { router }
