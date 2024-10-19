const notas = [];
const contenedorNotas = document.getElementById('contenedorNotas');
const agregarNotaBtn = document.getElementById('agregarNotaBtn');
const buscarNota = document.getElementById('buscarNota');

function agregarNota() {
  const textoNota = document.getElementById('nuevaNota').value;
  if (textoNota) {
    notas.push(textoNota);
    document.getElementById('nuevaNota').value = '';
    mostrarNotas();
  } else {
    alert('Por favor escribe una nota');
  }
}

function mostrarNotas(filtradas = null) {
  const notasAMostrar = filtradas || notas;
  contenedorNotas.innerHTML = '';
  notasAMostrar.forEach((nota, index) => {
    const notaDiv = document.createElement('div');
    notaDiv.className = 'nota';
    notaDiv.innerHTML = `
      <p>${nota}</p>
      <span class="boton-editar" onclick="editarNota(${index})">✏️ Editar</span>
      <span class="boton-eliminar" onclick="eliminarNota(${index})">❌ Eliminar</span>
    `;
    contenedorNotas.appendChild(notaDiv);
  });
}

function editarNota(index) {
  const nuevoTexto = prompt('Editar nota:', notas[index]);
  if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
    notas[index] = nuevoTexto;
    mostrarNotas();
  }
}

function eliminarNota(index) {
  notas.splice(index, 1);
  mostrarNotas();
}

function filtrarNotas() {
  const termino = buscarNota.value.toLowerCase();
  const notasFiltradas = notas.filter(nota => nota.toLowerCase().includes(termino));
  mostrarNotas(notasFiltradas);
}

agregarNotaBtn.addEventListener('click', agregarNota);
buscarNota.addEventListener('input', filtrarNotas)