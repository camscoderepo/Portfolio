const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');


app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public'));
});
if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
  }

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));