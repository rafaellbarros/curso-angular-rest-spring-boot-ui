const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/dist/algamoney-ui`));


app.get('/*', (req, res)  => {
  res.sendFile(`${__dirname}/dist/algamoney-ui/index.html`);
})

const appPort = process.env.PORT !== undefined ? process.env.PORT : 4200;
app.listen(appPort, () => {
  console.log(`Start server on port ${appPort}`)
});
