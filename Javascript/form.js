// ============== Database/storage of results ==============


let db = new PouchDB("usersData");


let url = document.URL;


let paramaters = (new URL(url)).searchParams;


let theDate = new Date().toISOString();      
let user = {
    _id: theDate,
    name: paramaters.get("fname"),
    about: paramaters.get("about"),
    email: paramaters.get("email")
};

db.put(user);