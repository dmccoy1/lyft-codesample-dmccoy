const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 80
function cutString(string) {
    let cutString = ''// Create an empty string to hold the new value

    for (let i = 3; i < string.length; i += 3) {//the loop will start at the third index(character)of the string and then proceed to every third index(character)
        cutString += string.charAt(i - 1)//using charAt to get the correct character to concat it to the new string
    }
    //Create an object to hold  result for return
    var stringObject = new Object()
    stringObject.return_string = cutString

    return JSON.stringify(stringObject)//Return new cut string has a JSON formatted String
}
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.post('/test', (req, res) => {
    if (req.body.hasOwnProperty('string_to_cut')) {
        res.send(cutString(req.body.string_to_cut))
    } else {
        throw new Error('No "string_to_cut" key found in request body') //Error Handling
    }
})

app.use(express.static('staticpages'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


