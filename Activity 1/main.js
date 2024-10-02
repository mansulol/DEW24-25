button = document.getElementById('submit');
age = document.getElementById('age');
height =  document.getElementById('height');
container = document.getElementById('container');

// button.onclick = function () {
    
//     let attractions = ATTRACTIONS.filter( (attraction) => {
//         return filter(attraction, age.value, height.value);
//     });

//     attractions.forEach( (attraction) => {
//         const newElement = document.createElement('div');
//         newElement.innerHTML(`\
//         <ul>\
//             <li>Name:${attractions.name}</li>\
//             <li>Description:${attractions.description}</li>\
//         <ul>`);
//         container.appendChild(newElement);
//     });
// }

button.addEventListener('click', e => {
    e.preventDefault()

    let atracctionArray = []
    
    ATTRACTIONS.forEach( (atraction) => {
        atracctionArray.push(filter(atraction, age.value, height.value))
    })

    atracctionArray.forEach( (attraction) => {
        const newElement = document.createElement('div');
        
        newElement.innerHTML = `\
        <ul>\
            <li>Name:${attraction.name}</li>\
            <li>Description:${attraction.descripcition}</li>\
            <li>Minimum age:${attraction.minimum_age}</li>\
            <li>Maximum age:${attraction.maximum_age}</li>\
            <li>Minimum height:${attraction.minimum_height}</li>\
            <li>Maximum height:${attraction.maximum_height}</li>\
        <ul>`;
        container.appendChild(newElement);
    } )

    console.log("Funciona")
})