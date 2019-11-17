const express = require('express');
const yelp = require('yelp-fusion');
const path = require('path');

if (!process.env.YELP_API_KEY) {
    console.log('Please set the env var YELP_API_KEY and retry.');
    process.exit(1);
}

const app = express();
const client = yelp.client(process.env.YELP_API_KEY);
const allowedDomain = process.env.ALLOWED_DOMAIN || '*';
const port = process.env.PORT || 1234;

const sendJson = (responsePromise, res) => responsePromise
    .then(response => res.status(200).send(response.jsonBody))
    .catch(error => res.status(400).send(error));

// Allow CORS
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', allowedDomain);
    next();
});

// Yelp Endpoints
app.get("/categories", (req, res, next) => sendJson(client.allCategories(), res));
app.get("/businesses/search", (req, res, next) => sendJson(client.search({ ...req.query }), res));
app.get("/businesses/:businessId", (req, res, next) => sendJson(client.business(req.params.businessId), res));
app.get("/businesses/:businessId/reviews", (req, res, next) => sendJson(client.reviews(req.params.businessId), res));

// Statically serve files from the `dist` folder
app.use(express.static(path.resolve(__dirname, '../dist')));

// All routes get redirected to index.html so React Router can handle it.
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));

// 404 Error
app.use((req, res, next) => res.status(404).send("something went wrong"));

app.listen(port);
console.log("Listening on port " + port);
