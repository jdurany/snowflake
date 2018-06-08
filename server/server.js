const express = require('express')
const app = express()

app.use(express.static(`${process.cwd()}/out`))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname+'./../out'})
})

const port = process.env.PORT || 3000
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening in ${port}`)
})
