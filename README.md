<H1>Api RESTful for patient registration.</H1>

<H3>Presentation</H3>
  
    Application RESTful that returns JSON string using the minimal resources of node.js. For this we use mainly Express and Body-parser. In the case of body-parser it was necessary to take the raw body from request. In this way we solve page coding problems since the data is not native UTF-8.
    It was used as a Sqlite3 database and as an ORM Sequelize to simplify the manipulation of the data.
    The npmjs.com Colors library was used to give greater readability to the server console. That is all !!!

<H3>To clone project</H3>

<b>git clone https://github.com/jorge751/node_api_patients.git</b>

<H3>To update the project modules</H3>

<b>npm install -g</b>

<H3>To migrate the database</H3>

<b>sequelize db: migrate</b>

<H3>To run in development</H3>

<b>npm run dev</b>

<H3>To run in production</H3>

<b>npm start</b>

<H3>To compile with pkg</H3>

<b>md exe</b></br>
<b>npm run comp</b>
