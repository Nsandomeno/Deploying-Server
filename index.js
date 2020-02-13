// imports
const express = require('express');

// create server
const server = express()

// global middlware
server.use(express.json())

// route handlers
server.get("/", (req, res) => {
    const songs = [
        {
            id:1,
            name: "Final Countdown"
        }
    ]
    res.status(200).json(songs)
})

// start server
const port = process.env.PORT || 5000 // Making the port dynamic
server.listen(port, () => console.log(`\n** Running on Port ${port}`))
