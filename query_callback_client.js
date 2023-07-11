const {Client} = require("pg");
const cliente = new Client({
 user: 'node_user',
 host: 'localhost',
 database: 'practica_db',
 password: '1234',
 port: 5432,
})
cliente.connect()


// 1. Seleccione todos los estudiantes que sean mayores de 25 años.
cliente.query('SELECT * from estudiantes where edad>25' , (err, res) => {
if (err) {
    console.log(err.stack)
} else 
    {console.log(res.rows)
// cliente.end() // Cerrando la conexión
    }
});



// 2. Seleccione todos los estudiantes, y ordene el resultado reflejando el apellido en forma descendente.
cliente.query('SELECT * FROM estudiantes ORDER BY apellidos desc', (err, res) => {
if (err) {
    console.log(err.stack)
} else 
    {console.log(res.rows)
// cliente.end() // Cerrando la conexión
    }
});
    

// 3. Seleccione todos los cursos disponibles
cliente.query('SELECT * FROM cursos', (err, res) => {
    if (err) {
    console.log(err.stack)
} else 
    {console.log(res.rows)
cliente.end() // Cerrando la conexión
    }
});


