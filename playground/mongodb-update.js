const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect server')
    }
    console.log('Server started')

    db.collection('Users').findOneAndUpdate({
        location:'Philadelphia'
    }, {
        $set:{
            location:'Nagpur'
        }
    },{
        returnOrginal:false
    
    }).then((result) => {
        console.log(result)
    })
})