const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello Work');
// });

app.use(require('./routes/user'));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});