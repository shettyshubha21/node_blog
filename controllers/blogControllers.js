const mysqlCon=require('../models/blog');

const blog_index=(req,res)=>{
    const q='SELECT * FROM blogs ORDER BY id DESC';
    mysqlCon.query(q,(err,rows,fields)=>{
        if(err)
        {
            console.log(err);
        }
        else{
             res.render('blogs/index',{title:'All Blogs',blogs:rows});
        }
    });
    }


const blog_create=(req,res)=>{
        res.render('blogs/create',{title:'Create New Blog'});
    }


const blog_post=(req,res)=>{
    const data=req.body;
    mysqlCon.query('INSERT INTO blogs(title,body) VALUES(?,?)',[data.title,data.body],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.redirect('/blogs');
        }
    });
}

const blog_delete=(req,res)=>{
    const id=req.params.id;
    
    mysqlCon.query('DELETE FROM blogs WHERE id=?',[id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json({redirect:'/blogs'});
        }
    });
}

const blog_details=(req,res)=>{
    let temp=req.params.id;
    temp=Number(Buffer.from(temp,'base64').toString('ascii'));
    const id=temp/7892;
    //console.log(id);

   mysqlCon.query('SELECT * FROM blogs WHERE id=?',[id],(err,rows,fields)=>{
    if(err || rows.length==0){
        console.log(err);
        res.status(404).render('404',{title:'Blog Not found',blog:true});
    }
    else{
        //console.log(rows);
        res.render('blogs/details',{title:'Blog Details',blog:rows[0]});
    }
   });
}

module.exports={
    blog_index,
    blog_create,
    blog_post,
    blog_delete,
    blog_details
}