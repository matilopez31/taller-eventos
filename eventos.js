document.addEventListener('DOMContentLoaded', function() 
{
    const divboton = document.querySelector('.boton');
    divboton.addEventListener('click', function(evento) 
    {
        evento.stopPropagation();
    });
});
