const express = require('express');
const app = express();
const port = 5000;
const courses = require('./course.json')
const details = require('./details.json')
const cors = require('cors');


app.use(cors());

app.get('/',(req,res)=>{ 
    res.send('Helloczx World');
})

app.get('/courses',(req,res)=>{
    res.send(courses);
})
app.get('/courses/:id',(req,res)=>{ 
    const id = parseInt(req.params.id);
   
    if (id === 110){
        res.send(courses);
    }else{
        const course =  courses.find(phn => phn.id === id) || {};
        res.send(course);
    }
    
})
app.get('/details',(req,res)=>{
    res.send(details)
})
app.get('/details/:id',(req,res)=>{ 
    const id = parseInt(req.params.id);
   
    if (id === 110){
        res.send(details);
        
    }else{
        const detail =  details.find(phn => phn.id === id) || {};
        res.send(detail);
    }
    
})



app.listen(port,()=>console.log(`Server is running on port ${port}`));