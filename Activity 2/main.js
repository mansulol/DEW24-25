let operations = [
    {
        operation: "push", 
        data: [[1, 2, 3], 4]
    },
    {
        operation: "+", 
        data: [1, 2, 3]
    },
    {
        operation: "*", 
        data: [2, 3]
    },
    {
        operation: "filter", 
        data: [[1, 2, 3], 3]
    },
    {
        operation: "merge", 
        data: [[1, 2, 3], [4, 5], [6], [7]]
    },
];


function batchProcessing(){
    operations.forEach((i) => {
        let operation = i.operation
        let data = i.data

        // Suma
        if( operation ==  "+"){
            let suma = 0

            data.forEach( (number) => suma+=number )

            console.log("Operacion: +, Array:", data);
            console.log("Suma = ", suma)

        // Multiplicacion
        }else if( operation ==  "*"){
            let Multiplicacion = 1

            data.forEach( (number) => {
                Multiplicacion*=number
            })

            console.log("Operacion: *, Array:", data);
            console.log("Multiplicacion = ", Multiplicacion)

        // Push
        }else if( operation ==  "push"){
            let [arrayPush, ...resto] = data

            for( let i=1; i<data.length; i++ ){
                arrayPush.push(data[i])
            }

            // Segunda solucion
            // let [first, ...rest] = data
            // arrayPush = [...first, ...rest]
            
            console.log("Operacion: Push, Array:", data);
            console.log("Push = ", arrayPush)

        // Merge
        }else if( operation ==  "merge"){
            let arrayMerge = []

            data.forEach( (dato) => {
                dato.forEach((num) => {
                    arrayMerge.push(num)
                })
            })

            // segunda solucion
            // arrayMerge.concat(data)

            // Tercera solucion
            // arrayMerge = data.flat()
            
            console.log("Operacion: Merge, Array:", data);
            console.log("Merge = ", arrayMerge)

        // Filter
        }else if( operation ==  "filter"){
            let arrayFilter = data[0]

            for(let i=0; i<=arrayFilter.length; i++){
                for(let j=1; j<data.length; j++){
                    if( arrayFilter[i] == data[j] ){
                        arrayFilter.splice(i)
                    }
                }
            }

            console.log("Operacion: Filter, Array:", data);
            console.log("Filter = ", arrayFilter)
        }
    })
}