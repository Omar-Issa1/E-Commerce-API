import express from "express"
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Hello World!")
})  

const PORT = process.env.PORT || 3000
const start = async () => {
   try {
     app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
     })
   } catch (error) {
     console.error("Error starting server:", error)
   }
}

start() 