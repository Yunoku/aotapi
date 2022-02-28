const express = require('express');
const app = express();
const port = 1999;
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
});

app.use(express.static(`${__dirname}/public/`));
app.use('/', router);

app.listen(port, () => {
    console.log("App is listening");
});
