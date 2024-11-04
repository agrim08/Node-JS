const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://agrimgupta8105:agrimgupta8105@agrim.yxnkx.mongodb.net/";

const client = new MongoClient(url);

const dbName = "namasteNode";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("nodeJs");

  const data = {
    name: "ansh",
    profession: "intern",
    hobby: "football",
  };

  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
