const productos = [
    { nombre: "latop", categoria: "tecnología", precio: 1000 },
    { nombre: "smartphone", categoria: "tecnología", precio: 600 },
    { nombre: "camisa", categoria: "ropa", precio: 30 },
    { nombre: "teclado", categoria: "tecnología", precio: 100 },
    { nombre: "zapatillas", categoria: "ropa", precio: 25 }
  ];
  
  const productosTecnologia = productos.filter(p => p.categoria === "tecnología");
  
  const productosConDescuento = productosTecnologia.map(p => ({
    ...p,
    precio: p.precio * 0.9
  }));
  
  const precioTotal = productosConDescuento.reduce((total, p) => total + p.precio, 0);
  
  console.log("Productos con descuento:", productosConDescuento);
  console.log("Precio total:", precioTotal);