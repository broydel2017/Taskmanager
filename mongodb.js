
const { MongoClient, ObjectID } = require('mongodb');
/* const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient; */
const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "taskManager";

const id = new ObjectID();
console.log(id, id.getTimestamp());


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, clientMessage) => {
    if (error) {
        return console.log("unable to connect database");

    }

    const db = clientMessage.db(dbName);
    //insert single data into mongoDB collection 
    // db.collection('tasks').insertOne({ _id: id, description: "clean the house again", isCompleted: true }); 

    // insert multiple data into mongoDB  //

    /*    db.collection('tasks').insertMany([
           {
               description: "Food",
               isCompleted: false
   
           },
           {
               description: "water the plants",
               isCompleted: false
           }
       ])
    */

    // select single data from MongoDB collection //
    /* db.collection('tasks').findOne({ _id: new ObjectID('5f6051c967b55b44e8953162') }, (error, task) => {
        if (error) {
            return console.log("unable to fetch database");
        }
        console.log(task);
    })
 */

    // select multiple data from mongoDB collection //

    /*  db.collection('tasks').find({ isCompleted: false }).toArray((error, task) => {
         if (error) {
             return console.log("unable to fetch database");
         }
         console.log(task);
     })
  */
    // update single data from mongoDB collection //

    /* db.collection('tasks').updateOne({ _id: new ObjectID('5f6051c967b55b44e8953162') },
        { $set: { description: "Cooking Lunch again" } }).then((result) => {
            console.log(result.result);

        }).catch((error) => {
            console.log(error);
        })
 */

    // update multiple data from mongoDB collection //

    /* db.collection('tasks').updateMany({
        isCompleted: false
    }, {
        $set: {
            isCompleted: true
        }
    }).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    })
 */


    // Delete data from mongoDB collection // 

    /* db.collection('tasks').deleteOne({ description: "clean the house" })
        .then((result) => {
            console.log(result.deletedCount);
        }).catch((error) => {
            console.log(error);
        })
 */

    // Delete many from mongoDB collection //

    db.collection('tasks').deleteMany({ isCompleted: true })
        .then((result) => {
            console.log(result.deletedCount);
        })
        .catch((error) => {

            console.log(error);
        })


})


