function imageExists(changed_png){
    const img = new Image()

    img.src = changed_png

    return img.complete && img.naturalHeight != 0
}