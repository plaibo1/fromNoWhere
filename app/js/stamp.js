document.addEventListener('readystatechange', function(event) {

    if (event.target.readyState === "complete") {
        setTimeout(function(){
            document.querySelector('.pora-valit').classList.add('stamp')
        }, 2000)
    }
});