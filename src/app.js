const yargs = require("yargs");
const {connection, client} = require("./database/connection.js");
const {addFilm, listFilm, deleteFilm, editFilm, deleteAll } = require("./utils/index.js");


const app = async(yargsObj) =>{
    const collection = await connection();
    if (yargsObj.add){
        await addFilm(collection, {title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year});
        console.log("Entry Added");

    } else if (yargsObj.list) {
        await listFilm(collection);

    } else if (yargsObj.update){
        await editFilm(collection, yargsObj.update, {title:yargsObj.title,actor:yargsObj.actor,director:yargsObj.director});
        console.log("Updated");

    } else if(yargsObj.delete){
        await deleteFilm(collection, yargsObj.delete);
        console.log("Deleted!");

    } else if(yargsObj.deleteAll){
        await deleteAll(collection, yargsObj.deleteAll);
        console.log("All Data Deleted")

    } else {
        console.log("Wrong Command");
    }
    await client.close();
};



app(yargs.argv);