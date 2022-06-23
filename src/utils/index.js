
// adds "films" items to the array
exports.addFilm = async (collection, filmObj) =>{
    try{
        const addEntry =await collection.insertOne(filmObj);
        console.log(addEntry);
    } catch (error){
        console.log(error)
    }
};

// lists all the array [films, actors, year] 
exports.listFilm = async (collection) =>{
    try{
        const filmList = await collection.find().toArray();
        console.log(filmList);
    } catch(error){
        console.log(error);
    }
};


//Create function for deleting database entry
exports.deleteFilm = async (collection) => {
    try {
    const deleteFilm = await collection.deleteOne({title:this.title});
    if (deleteFilm.deletedCount > 0){
        console.log("sucess")
    } else{
        console.log("Nothing Deleted")
    }
    } catch (error) {
    console.log(error);
    }
};
//delete all
exports.deleteAll = async (collection) => {
    try {
    const deleteAll = await collection.deleteMany({});
    console.log(deleteAll);
    } catch (error) {
    console.log(error);
    }
};

//Create Fuction for updating a database entry
exports.editFilm = async (collection, filmObj, edit) => {
    try {
    const update = await collection.updateOne(
        { filmObj },
        { $set: { edit } }
    );
    console.log(update);
    } catch (error) {
    console.log(error);
    }
};


//order data by "actor"
