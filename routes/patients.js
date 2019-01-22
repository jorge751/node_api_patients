//
//  Routes and patient controller
//
var express = require('express');
var routes = express.Router();
var Patient = require('./../models').Patients;
var colors = require('colors');
String.prototype.colors;

// INDEX - GET /patients
routes.get('/', (req, res) => {
  console.log('GET ALL'.cyan);
  Patient.findAll()
    .then(patients => {
      if (patients != null) {
        console.log('GET ALL OK\n'.cyan);
        res.status(200).json(patients);
      } else {
        console.log('GET ALL NOT FOUND\n'.cyan);
        res.status(404).json(JSON.stringify(patients));
      };
    })
    .catch(err => {
      console.log(err.red);
      res.status(500).json(err);
    });
});

// SHOW - GET /patients/1
routes.get('/:id?', (req, res) => {
  console.log('GET'.yellow, req.params.id.yellow);
  Patient.findByPk(req.params.id)
    .then(patient => {
      if (patient != null) {
        console.log('GET'.yellow, req.params.id.yellow, 'OK\n'.yellow);
        res.status(200).json(JSON.stringify(patient));
      } else {
        console.log('GET'.yellow, req.params.id.yellow, 'NOT FOUND\n'.yellow);
        res.status(404).json(JSON.stringify(patient));
      };
    })
    .catch(err => {
      console.log(err.red);
      res.status(500).json(err);
    });
});

// CREATE - POST /patients
routes.post('/', (req, res) => {
  const str = req.rawBody.join().split(',').map((c) => {return String.fromCharCode(c)}).join('')
  const pReq = JSON.parse(str)[0];
  console.log('CREATE'.magenta, pReq.numpac.toString().magenta, pReq.nombre.magenta);
  Patient.create(pReq)
    .then( (patient) => {
      console.log('CREATE OK\n'.magenta);
      res.status(200).json(JSON.stringify(patient)).end()
    })
    .catch(err => {
      console.log(err.red);
      res.status(500).json(err);
    });
});

// UPDATE - PUT /patients/1
routes.put('/:id', (req, res) => {
  const str = req.rawBody.join().split(',').map((c) => {return String.fromCharCode(c)}).join('');
  const pReq = JSON.parse(str)[0];
  console.log('UPDATE'.green, req.params.id.green, pReq.nombre.green);
  Patient.findByPk(req.params.id)
    .then(patient => {
      patient.update(pReq)
        .then( () => {
          console.log("UPDATE OK\n".green);
          res.status(200).json(JSON.stringify(patient)).end()
        })
        .catch(err => {
          console.log(err.red);
          res.status(500).json(err);
        })
      })
    .catch(err => {
      console.log(err.red);
      res.status(500).json(err);
    })
});

// DELETE /patients/1
routes.delete('/:id', (req, res) => {
  console.log('DELETE'.blue, req.params.id.blue);
  Patient.findByPk(req.params.id)
    .then(patient => {
      if (patient != null) {
        patient.destroy()
          .then( () => {
            console.log('DELETE OK\n'.blue);
            res.status(200).json(JSON.stringify(patient)).end()
          })
          .catch(err => {
            console.log(err.red);
            res.status(500).json(err);
          })
      } else {
        console.log('DELETE NOT FOUND\n'.blue);
        res.status(404).end();
      }
    })
    .catch(err => {
      console.log(err.red);
      res.status(500).json(err);
    })
});

exports.routes = routes;
