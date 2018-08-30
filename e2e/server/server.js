// var express = require('express');
// var path = require('path');
// var mysql = require('mysql');
// var bodyParser = require('body-parser');
// var ejs = require('ejs');
// var date = require('date-and-time');
// var fileUpload = require('express-fileupload');
// let now = new Date();

// var db = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : 'aman12345',
//     database : 'library-database'
// });

// db.connect((err) => {
//     if(err) throw err;
//     console.log('db connected');
// });

// var app= express();

// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(express.static(path.join(__dirname, 'Images')));
// // app.use(fileUpload());

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

// //rest api to create a new record into mysql database
// app.post('/create/employee', function (req, res) {
//   var postData  = req.body;
//   console.log(postData)
//   connection.query('INSERT INTO  employees SET ?', postData, function (error, results, fields) {
//    if (error) throw error;
//    res.end(JSON.stringify(results));

//   });
// });


// app.set('views', __dirname + '/views');
// app.use(express.static(path.join(__dirname,'views')));
// app.set('view engine','ejs');

// app.get('/create', (req,res) => {
// res.render('create');
// })

// app.post('/create', (req,res) => {
//     console.log(req.body);
//     var obj = req.body;
//     obj.reg_date = date.format(now, 'YYYY/MM/DD');
//     console.log(obj);

//     var file = req.files.userimage;
//     console.log(file);

//     // file.mv('Images/'+file.name, function(err) {
//     //     if (err) throw err;
//     //     console.log("image");

//     // });

//     obj.userimage = file.name;

//     let sql = 'insert into employees SET ?';
//         db.query( sql, obj, (err,result) => {
//             if(err) throw err;
//             console.log("new entry added");
//             res.redirect('/list');
//         });

// });
// /**
//  * to display all users
//  */

// app.get('/empolyee_list',(req,res) => {
//     db.query('select * from employees', (err,result) => {
//         if(err) throw err;
//         console.log(result)
//         res.end(JSON.stringify(result));
//         // res.render('viewlist',{result});
//         // console.log('inside viewlist')
//     })
// })

// app.get('/booklist',(req,res) => {
//   db.query('select * from booksList', (err,result) => {
//       if(err) throw err;
//       console.log(result)
//       res.end(JSON.stringify(result));
//       // res.render('viewlist',{result});
//       // console.log('inside viewlist')
//   })
// })

// /**
//  *
//  *  to delete information of a particular user
//  *
//  */

// app.get('/delete',(req,res) => {
//     console.log(req.query.id);
//     db.query("delete from employees where id ="+req.query.id, (err,result) => {
//         if (err) throw err;
//         console.log(result);
//         res.redirect('/list');
//     })
// });


// //to render edit page

// app.get('/edit',(req,res) => {
//     console.log(req.query.id);
//     var idd = Number(req.query.id);
//     console.log(idd);
//      db.query("select * from employees where id = "+idd, (err,result) => {
//          if(err) throw err;
//          console.log(result);
//          res.render('editform',{result});
//      })
// })


// /**
//  *
//  * to update information
//  *
//  */

// app.post('/edit',(req,res) => {
//     // console.log(req.body);
//     // console.log(req.query);

//     let sql = 'update employees set ? where id = ' + req.query.id;

//     db.query(sql,req.body, (err,result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('data updated successfully');
//     })


// })

// app.listen(3000, function(){
//     console.log("running");
// })

var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'aman12345', //mysql database password
  database : 'library-database' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
connection.on('error', function(err) {
  console.log("[mysql error]",err);
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Content-Type", "text/html");
  next();
});

//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(4000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all results
app.get('/v1/employees', function (req, res) {
   connection.query('select * from employees', function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

app.get('/v1/booksList', function (req, res) {
  connection.query('select * from booksList', function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

//rest api to get a single employee data
app.get('/v1/employees/:id', function (req, res) {
   console.log(req);
   connection.query('select * from employees where id=?', [req.params.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

//rest api to create a new record into mysql database
app.post('/v1/create_empolyee', function (req, res) {
  var postData  = req.body;
  console.log(postData)
  connection.query('INSERT INTO  employees SET ?', postData, function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
  //  res.send('hello');
 });
});
//rest api to create a new record into mysql database
app.post('/v1/create_book', function (req, res) {
  var postData  = req.body;
  console.log(postData)
  connection.query('INSERT INTO  booksList SET ?', postData, function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));

 });
});
//rest api to update record into mysql database
app.put('/v1/update_theme', function (req, res) {
   connection.query('UPDATE `employees` SET `groom_name`=?,`bride_name`=?,`date`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

app.delete('/v1/delete_empolyee',(req,res) => {
    console.log(req.query.id);
    db.query("delete from employees where id ="+req.query.id, (err,result) => {
        if (err) throw err;
        console.log(result);
        // res.redirect('/list');
    })
});

//rest api to delete record from mysql database
// app.delete('/v1/delete_empolyee:/id', function (req, res) {

//    console.log(req.body);
//    connection.query('DELETE FROM `employees` WHERE `id`=?', [req.body.id], function (error, results, fields) {
//    if (error) throw error;
//    res.end('Record has been deleted!');
//  });

//});
