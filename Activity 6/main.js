// Mi metodo
async function showTable(){
    let employees = []

    try {
        employees = await fetchData() // Espero que la funcion me devuelva los datos
    }
    catch (error) {
        console.log('No hay datos')
    }

    let container = document.querySelector('#table')
    container.style.textAlign='center'
    
    employees.forEach((employe) => {
        let row = document.createElement('tr')
        
        row.innerHTML = `<td>${employe.id}</td><td> ${employe.name}</td><td> ${employe.department}</td>`
        
        container.appendChild( row )
    })
    
}

async function fetchData(){
    const response = await fetch('./employees.json'); // Espero los datos
    
    return response.json(); // Transformo a json (devuelve una promesa)
}

// Metodo de la profe
// function showTableQuery(){
//     $(document).ready(() => {
//         $.ajax({
//             url: 'employees.json',
//             method: 'GET',
//             dataType: 'json',
//             success: (data) => {

//             }
//         })
//     })
// }