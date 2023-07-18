const port = process.env.PORT || 8016;
const cors = require("cors");
const fs = require("fs");


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

const express = require('express')
const app = express()


app.use(cors(corsOptions))

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
 
var number = 0

app.post("/logging_holes", async (req, res) => {

    try {
        let content = JSON.stringify(req.body)
        fs.writeFile(`timing_${number}.json`, content, function(err){
            if (err) throw err;
            console.log("saved?")
            number += 1
        })
    } catch (err) {
        console.log(`Error: ${err} ${req.headers} ${req.body}`)
    }

})

app.listen(port)
console.log(`GUTB image server up and listening on port:${port}`)   
