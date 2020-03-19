const router = require('express').Router();
const dataController = require('../../controllers/dataController');


router.route('/')
  .get(dataController.findAll)

router
  .route('/:id')
  .get(dataController.findById)


module.exports = router;