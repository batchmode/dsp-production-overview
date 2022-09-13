import express from 'express'
import withBaseUrl from "./baseurl.js";

const app = express()
const port = 8080

app.use(express.json())

app.use(withBaseUrl(''), express.static('dist'))


app.listen(port, () => {
    console.log(`Listening on port ${port} with baseUrl = ${withBaseUrl()}`)
})