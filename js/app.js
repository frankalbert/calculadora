document.addEventListener("click", function(e) {
  const id_elemento_clicado = e.target.id,
    valor_elemento_clicado = e.target.value;
  id_elemento_clicado === "cero" ||
  id_elemento_clicado === "uno" ||
  id_elemento_clicado === "dos" ||
  id_elemento_clicado === "tres" ||
  id_elemento_clicado === "cuatro" ||
  id_elemento_clicado === "cinco" ||
  id_elemento_clicado === "seis" ||
  id_elemento_clicado === "siete" ||
  id_elemento_clicado === "ocho" ||
  id_elemento_clicado === "nueve" ||
  id_elemento_clicado === "sumar" ||
  id_elemento_clicado === "restar" ||
  id_elemento_clicado === "multiplicar" ||
  id_elemento_clicado === "dividir" ||
  id_elemento_clicado === "punto"
    ? insertar(valor_elemento_clicado)
    : "";
});

let almacenamiento = window.localStorage;

const resultado = document.querySelector("#resultado"),
  contenidoRegistro = document.querySelector("#contenido__registro");
(cero = document.querySelector("#cero")),
  (uno = document.querySelector("#uno")),
  (dos = document.querySelector("#dos")),
  (tres = document.querySelector("#tres")),
  (cuatro = document.querySelector("#cuatro")),
  (cinco = document.querySelector("#cinco")),
  (seis = document.querySelector("#seis")),
  (siete = document.querySelector("#siete")),
  (ocho = document.querySelector("#ocho")),
  (nueve = document.querySelector("#nueve")),
  (sumar = document.querySelector("#sumar")),
  (restar = document.querySelector("#restar")),
  (multiplicar = document.querySelector("#multiplicar")),
  (dividir = document.querySelector("#dividir")),
  (limpiar = document.querySelector("#limpiar")),
  (punto = document.querySelector("#punto")),
  (igual = document.querySelector("#igual")),
  (borrar = document.querySelector("#borrar")),
  (limpiarHistorial = document.querySelector("#limpiar__historial"));

!almacenamiento.getItem("arregloResultados")
  ? (arregloResultados = [])
  : ((arregloResultados = JSON.parse(
      almacenamiento.getItem("arregloResultados")
    )),
    listarRegistroResultados());

limpiar.addEventListener("click", function() {
  resultado.value = "";
});
igual.addEventListener("click", function() {
  insertarResultado(resultado.value);
  resultado.value = eval(resultado.value);
  listarRegistroResultados();
});
borrar.addEventListener("click", function() {
  resultado.value = resultado.value.substring(0, resultado.value.length - 1);
});
limpiarHistorial.addEventListener("click", limpiarTodoHistorial);

function insertar(num) {
  resultado.value = resultado.value + num;
}

function insertarResultado(parametro) {
  arregloResultados.push({ expresion: parametro, valor: eval(parametro) });
  almacenamiento.setItem(
    "arregloResultados",
    JSON.stringify(arregloResultados)
  );
}

function listarRegistroResultados() {
  contenidoRegistro.innerHTML = "";
  arregloResultados.map(function(elemento, indice) {
    contenidoRegistro.innerHTML += `
            <tr>
                <th scope="row">${indice + 1}</th>
                <td>${elemento.expresion}</td>
                <td>${elemento.valor}</td>
            </tr>    
        `;
  });
}

function limpiarTodoHistorial() {
  !almacenamiento.getItem("arregloResultados")
    ? alert("No hay nada en el historial")
    : ((respuesta = confirm("¿Desea eliminar el historial de resultados?")),
      respuesta
        ? (almacenamiento.removeItem("arregloResultados"),
          listarRegistroResultados(),
          location.reload())
        : "");
}
