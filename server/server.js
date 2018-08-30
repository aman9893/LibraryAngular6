var express = require('express');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var date = require('date-and-time');
var fileUpload = require('express-fileupload');

var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'aman12345',
    database : 'library-database'
});

db.connect((err) => {
    if(err) throw err;
    console.log('db connected');
});



var app= express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Images')));
app.use(fileUpload());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//rest api to create a new record into mysql database
app.post('create', function (req, res) {
  var postData  = req.body;
  console.log(postData)
  connection.query('INSERT INTO  employees SET ?', postData, function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));

 });
});


app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname,'views')));
app.set('view engine','ejs');

app.get('/create', (req,res) => {
res.render('create');
})

// app.post('/create', (req,res) => {
//     console.log(req.body);
//     var obj = req.body;
//     let now = new Date();
//     obj.reg_date = date.format(now, 'YYYY/MM/DD');
//     console.log(obj);

//     var file = req.files.userimage;
//     console.log(file);

//     file.mv('Images/'+file.name, function(err) {
//         if (err) throw err;
//         console.log("image");

//     });

//     obj.userimage = file.name;

//     let sql = 'insert into employees SET ?';
//         db.query( sql, obj, (err,result) => {
//             if(err) throw err;
//             console.log("new entry added");
//             res.redirect('/list');
//         });

// });



/**
 * to display all users
 */

app.get('/empolyee_list',(req,res) => {
    db.query('select * from employees', (err,result) => {
        if(err) throw err;
        console.log(result)
        res.end(JSON.stringify(result));
        // res.render('viewlist',{result});
        // console.log('inside viewlist')
    })
})

app.get('/booklist',(req,res) => {
  db.query('select * from booksList', (err,result) => {
      if(err) throw err;
      console.log(result)
      res.end(JSON.stringify(result));
      // res.render('viewlist',{result});
      // console.log('inside viewlist')
  })
})

/**
 *
 *  to delete information of a particular user
 *
 */

app.get('/delete',(req,res) => {
    console.log(req.query.id);
    db.query("delete from employees where id ="+req.query.id, (err,result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/list');
    })
});


//to render edit page

app.get('/edit',(req,res) => {
    console.log(req.query.id);
    var idd = Number(req.query.id);
    console.log(idd);
     db.query("select * from employees where id = "+idd, (err,result) => {
         if(err) throw err;
         console.log(result);
         res.render('editform',{result});
     })
})


/**
 *
 * to update information
 *
 */

app.post('/edit',(req,res) => {
    // console.log(req.body);
    // console.log(req.query);

    let sql = 'update employees set ? where id = ' + req.query.id;

    db.query(sql,req.body, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('data updated successfully');
    })


})

app.listen(3000, function(){
    console.log("running");
})
