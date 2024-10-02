var employees = [
    {"id":1,"name":"MIRIAM CASTIÑEIRA BREA","department":"IT"},
    {"id":2,"name":"GONZALO MULET FIGUERAS","department":"IT"},
    {"id":3,"name":"FRANCISCO JOSE GRAÑA BARBERA","department":"IT"},
    {"id":4,"name":"IRENE POMBO JORDA","department":"HR"}
];

// employees.forEach((employe) => {
//     alert(
//     `Id: ${employe.id}, 
//     Name: ${employe.name}, 
//     Departament: ${employe.department}`)
// })

let container = document.getElementById('tbody')

employees.forEach((employe) => {
    let row = document.createElement('tr')

    let id = document.createElement('td').innerHTML="SI"
    let name = document.createElement('td').innerHTML="No"
    let department = document.createElement('td').innerHTML="No se"

    row.append( id )
    row.append(name)
    row.append(department)

    container.append( row )
})
