// users: id, name, last_name, email, password, username, avatar, phone, role_id, school_id
const sql = require("./db.js");

// constructor
const Users = function (users) {
    this.name = users.name;
    this.last_name = users.last_name;
    this.email = users.email;
    this.password = users.password;
    this.username = users.username;
    this.avatar = users.avatar;
    this.phone = users.phone;
    this.role_id = users.role_id;
    this.school_id = users.school_id;
};

// metodo post creo :v
Users.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", {id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser});
    });
};

// mostrar dato por id creo :v
Users.findById = (id, result) =>{
    sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found users: ", res[0]);
            result(null, res[0]);
            return;
        }

        // no funciono users con la id
        result({kind: "not_found" }, null);
    });
};

// obtener todos los datos de la tabla creo pero un poco mas xd
Users.getAll = (name, result) => {
    let query = "SELECT * FROM users";

    if (title) {
        query += ` WHERE name LIKE '%${name}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
};

