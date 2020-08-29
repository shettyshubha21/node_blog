const express=require('express');
const morgan=require('morgan');
const blogRoutes=require('./routes/blogRoutes');
const app=express();

app.listen(3000)

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));


app.use(morgan('dev'));

app.get('/',(req,res)=>{
   res.redirect('/blogs'); 
});

app.use('/blogs',blogRoutes);

app.use((req,res)=>{ 
    res.status(404).render('404',{title:'404'});
});



