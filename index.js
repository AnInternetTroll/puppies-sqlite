import express from "express";
import { open } from "sqlite";
import sqlite from "sqlite3";

/*
CREATE TABLE "puppies" (
	"name"	TEXT NOT NULL,
	"breed"	TEXT NOT NULL
)
*/
const db = await open({
	driver: sqlite.Database,
	filename: "database.sqlite",
});

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (_req, res) => {
	res.render("index", {
		// Get all puppies and their name and breed from the database
		puppies: await db.all("SELECT name, breed FROM puppies"),
	});
});

app.post("/new-dog", async (req, res) => {
	// Insert the name and breed of a puppy
	await db.run("INSERT INTO puppies VALUES (:name, :breed)", [
		req.body.name,
		req.body.breed,
	]);
	res.redirect("/");
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
