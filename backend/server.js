const 
mongoose = require("mongoose"),
express = require("express"),
bodyParser = require("body-parser"),
logger = require("morgan"),
Data = require("./data");
/*Promise = require('bluebird');
Promise.config({
  cancellation: true
});
*/


const API_PORT = 4001;
const app1 = express();
const router = express.Router();
//const Search = require('../client/src/app1.js');

// this is our MongoDB database
//const dbRoute = "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest";
//const dbRoute = "mongodb://alexandergoldberg:tugdUqXR1885210623@cluster0-shard-00-00-oecvl.mongodb.net:27017,cluster0-shard-00-01-oecvl.mongodb.net:27017,cluster0-shard-00-02-oecvl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
const dbRoute = "mongodb://use_teleg:BqgS9DJJ8B7rYSyBVZ@93.188.161.182:18063/test";
// connects our back end code with the database
/*
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true },
  { useMongoClient: true }
);
*/
var options = { server: { socketOptions: { keepAlive: 30000 } } };
//var base = mongoose.createConnection(process.env.MONGO,options);
var db = mongoose.createConnection(dbRoute, options);
//let db = mongoose.connection;
let dbo = db.collection('supportbot');

/*
db.once("open", (req,res) => console.log("connected to the database"), dbo.findOne((err, data) => {
    if (err) return res.json({ success: false, error: err });
	    console.log(Object.values(data) );
  }   ));
*/

//db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app1.use(bodyParser.urlencoded({ extended: false }));
app1.use(bodyParser.json());
app1.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
/*
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});
*/


//##################################    Worked Code ############################################################
router.get("/getvalue1/:input", (req, res) => {
	//var Value = require("../client/src/App.js")
	var put = req.params.input;
	//var put = putvalue();
	console.log('This is put' + ' ' + put)
	//console.log('This is put' + ' ' + Object.values(put))
  let datas = [];
	
  dbo.find({$or:[{"message.text.problem": new RegExp(put)},{"message.text.fixproblem": new RegExp(put)}]}).limit(5).toArray((err, data) => {
	if (err) return res.json({ success: false, error: err });
	for (i=0;i<data.length;i++){
		
	datas.push(data[i])	;
	
	}
    return  res.json({ success: true, data: datas}),console.log('This is datas:' + '\n' + datas[0]);
	
  })
  
});
//##################################    Get Value Supportbot #############################################################

//##################################    Insert VALUE #############################################################

router.post("/insertvalue", (req, res) => {
  let data = new Data();

  const { username, userid,messagechatid,messageid,messageproblem,messagefixproblem } = req.body;
  console.log (username);

  data.user.name = username;
  data.user.id = userid;
  data.message.chat_id = messagechatid;
  data.message.id = messageid;
  data.message.text.problem = messageproblem;
  data.message.text.fixproblem = messagefixproblem;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
//##################################    Insert VALUE #############################################################



// app1end /api for our http requests
app1.use("/api", router);

// launch our backend into a port
app1.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
