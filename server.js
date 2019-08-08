const express = require("express")
const fileUpload = require("express-fileupload")
const fs = require("fs")

const app = express()

app.use(fileUpload())

//Upload endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" })
  }

  const file = req.files.file

  if (fs.existsSync(`${__dirname}/client/public/uploads/${file.name}`)) {
    console.log("exista deja")
    return res.status(302).send("")
  } else {
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err)
        return res.status(500).send(err)
      }

      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
      console.log("s-a uploadat")
    })
  }
})

app.listen(5000, () => console.log("Server Started..."))
