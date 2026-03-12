const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbname = "SOLARSYSTEMS";

// Yhdistä tietokantaan kerran
async function connectDB() {
    if (!client._connected) {
        await client.connect();
        client._connected = true;
        console.log("MongoDB connected");
    }
}

app.get("/starsystem", async (req, res) => {
    try {
        await connectDB();
        const db = client.db(dbname);
        const collection = db.collection("STARSYSTEM");

        const data = await collection.find({}).toArray();

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

app.listen(3001, () => console.log("Server running on port 3001"));