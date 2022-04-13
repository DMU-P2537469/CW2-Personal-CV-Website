// ============== Database/storage of results ==============

// ============== A new database would be created on the PouchDB network, this would be database would be named "usersData". ==============
// ============== A variable would be created holding this new information called db (short for database) ==============

let db = new PouchDB("usersData");

// ============== A new url variable is defined ==============

let url = document.URL;

// ============== Paramaters are created for the new url ==============

let paramaters = (new URL(url)).searchParams;

// ============== The questions form on the html contact page are defined under the names "fname, about, email" what this does is gathers the answers provided from the form and stores that user inputed data into the following catagories "name:, about:, email:" this data would all be held within a variable called "user" inwhich the "user" data would be added into the new database (db) ==============

let theDate = new Date().toISOString();      
let user = {
    _id: theDate,
    name: paramaters.get("fname"),
    about: paramaters.get("about"),
    email: paramaters.get("email")
};

db.put(user);
