const express = require('express');
const app = express();

const PORT = process.env.PORT || 3500;


app.get('/trang-chu', (req,res) =>{
    res.send('HELLO Khoa');
})

app.listen(PORT, ()=> 
    console.log(`Server running on port ${PORT}`)
)