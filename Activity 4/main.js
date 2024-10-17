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

let container = document.getElementById('tabla')
container.style.textAlign='center'

employees.forEach((employe) => {
    let row = document.createElement('tbody')

    row.innerHTML = `<td>${employe.id}</td><td> ${employe.name}</td><td> ${employe.department}</td>`

    container.append( row )
})
