import app from "./src/app.js";
import config from "./src/config/config.js";
import dbConnection from "./src/config/db.js";
dbConnection()
const PORT = config.PORT || 4000

app.listen(PORT,(req,res)=>{
    console.log(`http://localhost:${PORT}/`)
})