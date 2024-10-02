<<<<<<< HEAD
function filter(attraction, age, height) {

    let atracctionOption = attraction

    if( age >= attraction.minimum_age ){
        atracctionOption = attraction

        if( attraction.maximum_age != undefined ){

            if( age >= attraction.maximum_age ){
                atracctionOption = null
            }
        }else{
            atracctionOption = {
                name: attraction.name,
                descripcition: attraction.descripcition,
                minimum_age: attraction.minimum_age,
                maximum_age: "No",
                minimum_height: attraction.minimum_height,
                maximum_height: attraction.maximum_height
            }
        }

    }

    if( height >= attraction.minimum_height ){
        atracctionOption = attraction

        if( attraction.maximum_age != undefined ){

            if( age >= attraction.maximum_age ){
                atracctionOption = null
            }
        }else{
            atracctionOption = {
                name: attraction.name,
                descripcition: attraction.descripcition,
                minimum_age: attraction.minimum_age,
                maximum_age: "No",
                minimum_height: attraction.minimum_height,
                maximum_height: attraction.maximum_height
            }
        }

    }

    return atracctionOption