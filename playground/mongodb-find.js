const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if(err) {
 return console.log('unable to connect', +err);
 }
 console.log('Connected to MongoDb server')

 db.collection('Users').find({location:'Hyderabad'}).toArray().then((docs)=> {
    console.log(JSON.stringify(docs, undefined, 2))
 }, (err) => {
    console.log('Unable to find the record')
 })


 db.collection('Users').find({location:'Hyderabad'}).count().then((count)=> {
     console.log('Todo Count', count);
     //console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
     console.log('Unable to find the record')
  })

  db.collection('Users').find({
      _id: new ObjectID('5c24793b8ce3941f24cb8959')
  }).toArray().then((docs)=>{
    console.log(docs)
  }, (err)=>{
    console.log('unable to find record', err)
  })

 // db.close();
})