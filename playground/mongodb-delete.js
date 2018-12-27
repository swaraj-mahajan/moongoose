const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect server', err)
    }
    console.log('Server is connected');

    //deleteMany
    /** This method will delete multiple documents */
    // db.collection('Users').deleteMany({text:'eat lunch'}).then((result)=>{
    //     console.log(result)
    // });

    /**
     * This will delete first occuring item.
     */
    // db.collection('Users').deleteOne({location:'nagpur'}).then((result)=>{
    //     console.log(result)
    // })

    /**
     * This will find , delete and return the deleted item.
     */
    db.collection('Users').findOneAndDelete({name:'aniket'}).then((result) => {
        console.log(result)
    })
})