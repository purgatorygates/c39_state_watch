const router = require('express').Router(),
  { getRepByZipcode } = require('../../controllers/representatives');

router.get('/representatives/', getRepByZipcode);

// router.get('/api/representatives/:id', (request, response) => {
//   response.json({
//     message: 'get individual reps'
//   });
// });

module.exports = router;
