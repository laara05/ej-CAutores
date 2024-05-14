class CAutores {
    constructor(nombre, apellido, nacionalidad, mejorObra, añoPublicacion, edadPublicacion) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.nacionalidad = nacionalidad;
      this.mejorObra = mejorObra;
      this.añoPublicacion = añoPublicacion;
      this.edadPublicacion = edadPublicacion;
    }
  }
  
  // instancia de autores
  const autores = [
    new CAutores("Gabriel", "García Marquez", "Colombiano", "Cien años de soledad", 1967, 40),
    new CAutores("Julio", "Cortazar", "Argentino", "Rayuela", 1963, 48),
    new CAutores("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40),
    new CAutores("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45),
    new CAutores("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56),
    new CAutores("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38),
    new CAutores("Carlos", "Fuentes", "Mexicano", "La razón más transparente", 1958, 29),
    new CAutores("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31)
  ];
  
  // 2- a. por nacionalidad Argentina
  const autoresArgentinos = autores.filter(autor => autor.nacionalidad === "Argentino");
  console.log("Autores argentinos:", autoresArgentinos);
  
  // b. publicados entre 1960 a 1980
  const autoresEntre1960y1980 = autores.filter(autor => autor.añoPublicacion >= 1960 && autor.añoPublicacion <= 1980);
  console.log("Autores que publicaron entre 1960 y 1980:", autoresEntre1960y1980);
  
  // c. promedio de la edad de publicación
  const edadesPublicacion = autores.map(autor => autor.edadPublicacion);
  const promedioEdadPublicacion = edadesPublicacion.reduce((a, b) => a + b, 0) / edadesPublicacion.length;
  console.log("Promedio de la edad de publicación:", promedioEdadPublicacion);
  
  // d. todos los autores
  console.log("Todos los autores:", autores);
  