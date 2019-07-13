const express = require('express') ; 
const port = process.env.PORT || 3000
const srv = express() ; 

srv.get('/',(req,res)=>{
    res.send("Hello World") ;
})

srv.listen(port) ;