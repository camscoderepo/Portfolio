const express = require('express');
const sslRedirect = require('heroku-ssl-redirect');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(sslRedirect(['production'], 301));

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html' ));
});



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));