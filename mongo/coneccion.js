const mongoclient = require('mongodb').MongoClient;
const mongoConnectionString = "mongodb+srv://admin:betp2@cluster0-zdy6w.mongodb.net/test?retryWrites=true&w=majority";

function createMongoClient() {
    return new mongoclient(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
}

//INSERT INVENTOR
async function insertInventor(newInventor) {
    try {
        let cli = await createMongoClient().connect();
        let inventorsCollection = cli.db("sample_betp2").collection("inventors");

        await inventorsCollection.insertOne(newInventor);
        console.log(`Inventor ${newInventor.firstName} ${newInventor.lastName} successfully added to the data base`);

        await cli.close();
    } catch (error) {
        console.log(`Error inserting inventor: ${error.stack}`)
    }
}

//SEARCH INVENTOR
async function searchInventor(inventorToFind) {
    try {
        let cli = await createMongoClient().connect();
        let collection = cli.db("sample_betp2").collection("inventors");

        let requiredInventor = await collection.find({lastName: inventorToFind.lastName}).toArray();
        if (requiredInventor) {
            console.log(`Inventor found: ${inventorToFind.firstName} ${inventorToFind.lastName}`);
        } else {
            console.log(`Inventor ${inventorToFind.firstName} ${inventorToFind.lastName} was not found"`);
        }

        await cli.close();
    } catch (error) {
        console.log(`Error searching for inventor ${error}`)
    }
}

//MODIFY INVENTOR
async function modifyInventor(inventorToModify, inventorModified) {
    try {
        let cli = await createMongoClient().connect();
        let collection = cli.db("sample_betp2").collection("inventors");

        await collection.updateOne({lastName: inventorToModify.lastName}, {$set: {lastName: inventorModified.lastName}});
        console.log(`inventor ${inventorToModify.lastName} successfully updated`);

        await cli.close();
    } catch (error) {
        console.log(`Error modifying inventor ${error}`)
    }
}

//DELETE INVENTOR
async function deleteInventor(inventorToDelete) {
    try {
        let cli = await createMongoClient().connect();
        let collection = cli.db("sample_betp2").collection("inventors");

        await collection.deleteOne({lastName: inventorToDelete.lastName});
        console.log(`inventor ${inventorToDelete.lastName} successfully deleted`);

        return cli.close().then();
    } catch (error) {
        return console.log(error).then();
    }
}

async function RunMongoTest(Inventor1, Inventor2) {
    await insertInventor(Inventor1);
    await searchInventor(Inventor1);
    await modifyInventor(Inventor1, Inventor2);
    await deleteInventor(Inventor2);
}

const InventorMock = {
    firstName: "Sebastian",
    lastName: "Reh",
    year: 1990
};

const InventorMockToModify = {
    firstName: "Ricardo",
    lastName: "Reh",
    year: 1990
};

RunMongoTest(InventorMock, InventorMockToModify);
