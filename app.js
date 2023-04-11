const express = require('express');
const router = require('./routers/pageRouter');
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('public'));

//Routes
app.use('/', router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
