const $ = function(id){
    return document.getElementById(id)
}
window.addEventListener('load', () => {
    //$('title').focus();

    const validation = (e,txt) => {
        if($(e).value.trim() == ""){
            $(e).classList.add('is-invalid')
            $('error-' + e).innerText = txt
        }else{
            $(e).classList.remove('is-invalid')
            $(e).classList.add('is-valid')
            $('error-' + e).innerText = null
        }
    }

    $('title').addEventListener('blur', () => {
       validation('title', 'El título es requerido')
    })

    $('rating').addEventListener('blur', () => {
        switch (true) {
            case $('rating').value < 0 || $('rating').value > 10 :
                $('rating').classList.add('is-invalid')
                $('rating').classList.remove('is-valid')
                $('error-rating').innerText = 'Debe ser un valor entre 0 y 10'
                break
            case $('rating').value == "":
                $('rating').classList.add('is-invalid')
                $('rating').classList.remove('is-valid')
                $('error-rating').innerText = 'Debes indicar una clasifiación'
                break;
            default:
                $('rating').classList.remove('is-invalid')
                $('rating').classList.add('is-valid')
                $('error-rating').innerText = null
                break;
        }
    })

    $('awards').addEventListener('blur', () => {
        switch (true) {
            case $('awards').value < 0 || $('awards').value > 10 :
                $('awards').classList.add('is-invalid')
                $('awards').classList.remove('is-valid')
                $('error-awards').innerText = 'Debe ser un valor entre 0 y 10'
                break
            case $('awards').value == "":
                $('awards').classList.add('is-invalid')
                $('awards').classList.remove('is-valid')
                $('error-awards').innerText = 'Debes indicar la cantidad de premios'
                break;
            default:
                $('awards').classList.remove('is-invalid')
                $('awards').classList.add('is-valid')
                $('error-awards').innerText = null
                break;
        }

    })

    $('release_date').addEventListener('blur', () => {
        validation('release_date', 'Debe indicar la fecha de estreno')

    })

    $('length').addEventListener('blur', () => {
        validation('length', 'Debe indicar la duración')

    })
    $('genre_id').addEventListener('blur', () => {
        validation('genre_id', 'Debe indicar el género')

    })

    $('form-addMovie').addEventListener('submit', (e) => {
        e.preventDefault()
        let error = false;
        let elements = $('form-addMovie').elements;
        console.log(elements);

        for (let i = 0; i < elements.length - 1; i++) {
            if(elements[i].classList.contains('is-invalid') || elements[i].value == ""){
                error = true;
                elements[i].classList.add('is-invalid')
            }
            
        }
              
        !error && $('form-addMovie').submit()

    })


   
})
