document.getElementById("registro-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById ("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    const data = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    const url= "https://jsonplaceholder.typicode.com/users";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

fetch(url,options)
.then(response => response.json ())
.then(data => {
    console.log("Se ha enviado la respuesta:", data)
})

.catch(error => {
    console.error('Error de envio:', error);
  
  });

});
