const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());


const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbname = "SOLARSYSTEMS";

app.get("/starsystem", async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbname);
        const collection = db.collection("STARSYSTEM");

        const data = await collection.findOne({
            _id: new ObjectId("5f41351f4f3d9c58f07e1c49")
        });

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

app.listen(3001, () => console.log("Server running in port 3001"));