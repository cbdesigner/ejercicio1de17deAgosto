// Definimos la función "crearUsuario" que recibe 5 parámetros: nombre, apellido, email, ocupacion y edad.
function crearUsuario(nombre, apellido, email, ocupacion, edad) {
  // Validamos que "nombre" sea un string no vacío.
  if (typeof nombre !== "string" || nombre.trim() === "") {
    throw new Error("El nombre debe ser un string no vacío.");
  }

  // Validamos que "apellido" sea un string no vacío.
  if (typeof apellido !== "string" || apellido.trim() === "") {
    throw new Error("El apellido debe ser un string no vacío.");
  }

  // Validamos que "email" sea un string que contenga un "@" para verificar que es un email básico.
  if (typeof email !== "string" || !email.includes("@")) {
    throw new Error("El correo electrónico debe ser un string válido.");
  }

  // Validamos que "ocupacion" sea un string no vacío.
  if (typeof ocupacion !== "string" || ocupacion.trim() === "") {
    throw new Error("La ocupación debe ser un string no vacío.");
  }

  // Validamos que "edad" sea un número entero y mayor o igual a 0.
  if (typeof edad !== "number" || edad < 0 || !Number.isInteger(edad)) {
    throw new Error("La edad debe ser un número entero mayor o igual a 0.");
  }

  // Creamos el objeto usuario con las propiedades correspondientes.
  const usuario = {
    nombre: nombre, // Asignamos el valor de "nombre" al atributo "nombre" del objeto.
    apellido: apellido, // Asignamos el valor de "apellido" al atributo "apellido" del objeto.
    email: email, // Asignamos el valor de "email" al atributo "email" del objeto.
    ocupacion: ocupacion, // Asignamos el valor de "ocupacion" al atributo "ocupacion" del objeto.
    edad: edad, // Asignamos el valor de "edad" al atributo "edad" del objeto.
  };

  // Retornamos el objeto usuario creado.
  return usuario;
}

// Ejemplo de uso de la función creando varios usuarios.
try {
  const usuario1 = crearUsuario(
    "Juan",
    "Pérez",
    "juan.perez@example.com",
    "Ingeniero",
    30
  );
  console.log(usuario1); // Muestra el objeto usuario1 en la consola.

  const usuario2 = crearUsuario(
    "María",
    "González",
    "maria.gonzalez@example.com",
    "Doctora",
    45
  );
  console.log(usuario2); // Muestra el objeto usuario2 en la consola.

  // Ejemplo con datos inválidos para demostrar las validaciones.
  const usuario3 = crearUsuario("", "Lopez", "example.com", "Estudiante", -5);
  console.log(usuario3); // Esto lanzará un error debido a las validaciones.
} catch (error) {
  console.error(error.message); // Muestra el mensaje de error en la consola.
}
