const estudiante = {
    datosPersonales: {
      nombre: 'Juan Pérez',
      edad: 20,
      direccion: {
        ciudad: 'medellin',
        numer: '101',
        calle: 'calle 10'
      }
    },
    notas: {
      matematicas: 4.5,
      ciencias: 3.8,
      historia: 4.0
    }
  };
  
  // Destructuración anidada
  const { 
    datosPersonales: { nombre, direccion: { ciudad } }, 
    notas: { matematicas } 
  } = estudiante;
  
  console.log(nombre); // 'Juan Pérez'
  console.log(ciudad); // 'Madrid'
  console.log(matematicas); // 85