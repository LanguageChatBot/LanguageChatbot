const express = require('express');
const debug = require('debug')('server:crud');
const _ = require('lodash');

const generateCRUD = (Model) => {

  const router = express.Router();

  /* R => RETRIEVE */
  // Retrieve all
  router.get('/', function (req, res, next) {
    debug(`Retrieving all`);
    Model.find({...req.query})
      .then(list => res.status(200).json(list))
      .catch(e => res.status(500).json(e))
  });

  // Retrieve one
  router.get('/:id', function (req, res, next) {
    debug(`Retrieving id: ${req.params.id}`)
    Model.findById(req.params.id)
      .then(list => res.status(200).json(list))
      .catch(e => res.status(500).json(e))
  });

  /* C => CREATE */
  router.post('/', function (req, res, next) {

    // Get only the properties we need
    const model_properties = _.remove(
      Object.keys(Model.schema.paths),
      k => !['_id', '__v', 'created_at', 'updated_at'].includes(k)
    );
    const obj_data = _.pick(req.body, model_properties);

    const theModel = new Model(obj_data);
    theModel.save()
      .then(obj => {
        debug(`CREATED: ${obj._id}`)
        res.status(201).json(obj)
      })
      .catch(e => res.status(500).json(e))
  });

  /* U => UPDATE */
  router.put('/:id', function (req, res, next) {
    // Get only the properties we need
    const model_properties = _.remove(
      Object.keys(Model.schema.paths),
      k => !['_id', '__v', 'created_at', 'updated_at'].includes(k)
    );
    const updates = _.pick(req.body, model_properties);

    Model.findByIdAndUpdate(req.params.id, updates)
      .then(newObj => {
        debug(`UPDATED: ${newObj._id}`)
        res.json({ message: 'Model updated successfully' })
      })
      .catch(e => res.status(500).json(e))
  });

  /* D => DELETE */
  router.get('/delete/:id', function (req, res, next) {
    Model.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'removed' }))
      .catch(e => res.status(500).json(e))
  });

  return router;
}
module.exports = generateCRUD;