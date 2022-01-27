# Puppies
A simple website that shows puppies and allows users to add their own puppy.

# Setup
The basic gist is
1. Install dependencies
2. Set up SQLite

```sh
npm i
sqlite3 database.sqlite 'CREATE TABLE "puppies" (
    "name"TEXT NOT NULL,
    "breed"TEXT NOT NULL
)'
```
