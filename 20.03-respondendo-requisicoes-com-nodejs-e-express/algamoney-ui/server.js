const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/dist/algamoney-ui`));


app.get('/*', (req, res)  => {
  res.sendFile(`${__dirname}/dist/algamoney-ui/index.html`);
})

app.listen(4200, () => {
  console.log('Strt server on port 4200!');
});
