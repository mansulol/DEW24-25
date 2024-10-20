async function sendForm(e){
    e.preventDefault()

    let inputValue = document.querySelector('.input-submit').value

    let data = ""

    try {
        data = getPlace("__url_api__")
        
    } catch (error) {
        console.log('error al obtener api')
    }

    
    console.log(data)
}

async function getPlace(string){

    let url = await fetch(string)

    console.log(url)
    
    let result = await url.json()
    console.log(result)
    
    return result
}