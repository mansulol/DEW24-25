let rows = document.querySelector("#rowInput");
let columns = document.querySelector("#columnInput");

let btn = document.querySelector("#btn");
let container = document.querySelector("#container");
let resultado = document.querySelector("#resultado");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Filas: " + rows.value, "Columnas:" + columns.value);
  validateInputs();
});

function validateInputs() {
  if (rows.value == "" || columns.value == "") {
    resultado.innerHTML = "Resultado: Campo invalido";
  } else {
    if (isNaN(rows.value) || isNaN(columns.value)) {
      resultado.innerHTML = "Resultado: Campo no numerico";
    } else {
      let n1 = parseInt(rows.value);
      let n2 = parseInt(columns.value);

      generateTable(n1, n2);
    }
  }
}

function generateTable(row, colum) {
  let table = document.createElement("table");

  for (let i = 1; i <= row; i++) {
    let rowTable = document.createElement("tr");

    for (let j = 1; j <= colum; j++) {
      let columnTable = document.createElement("td");
      columnTable.innerHTML = ` ${i}, ${j} `;
      columnTable.style.border = "1px solid #000";
      rowTable.append(columnTable);
    }
    table.append(rowTable);
  }
  container.appendChild(table);
}
