const
mongoose = require("mongoose"),
Schema = mongoose.Schema,
dbRoute = process.env.URL_DB;
// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

var db = mongoose.connection;
var dbo = db.collection('supportbot');


// this will be our data base's data structure 
const DataSchema = new Schema(
{		 user: {
         name: String,
		 id: String,
		    	 },
		 message: {
         chat_id: Number, 
         id: Number,
         text: {
			problem: String, 
			fixproblem: String
		 } 
		 }
		 	 },
			 { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = db.model("supportbot", DataSchema,'supportbot');
