//
//  RESTful API for patient registration
//
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

// Modify the behavior to process the body of the request manually
app.use(bodyParser.json({verify:function(req,res,buf){req.rawBody=buf}}))

const patientsRoutes = require('./routes/patients.js').routes;
app.use('/patients', patientsRoutes);

app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => res.send('Run RESTful API for patient registration !!!'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'), '!!!');
});
