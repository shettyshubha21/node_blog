const mysql=require('mysql');
const mysqlCon=mysql.createConnection(
    {
      host:'blog-app.cthtbzdt3otb.us-east-1.rds.amazonaws.com',
      user:'admin',
      password:'mohith123',
      port:'3306',
      database:'blog_app'

    });

mysqlCon.connect((err)=>{
    if(!err){
        console.log('connected to database');
    }
    else{
        console.log('Connection Failed\n',err);
    }
});

module.exports=mysqlCon;