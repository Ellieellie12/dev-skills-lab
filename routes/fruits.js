import { Router } from 'express'
import * as fruitsCtrl from '../controllers/fruits.js'

const router = Router()

router.get('/', fruitsCtrl.index)
router.get('/new', fruitsCtrl.new)
router.post('/', fruitsCtrl.create)
router.get('/:fruitId', fruitsCtrl.show)
router.post('/', fruitsCtrl.create)
router.delete('/:fruitId', fruitsCtrl.delete)

export { router }
