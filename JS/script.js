$(document).ready(function(){
    $('#carousel-imagens').slick({autoplay:true })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle() 
    })

    // como usar as mascaras para input
    // telefone
    $('#telefone').mask('(00) 00000-0000')

    /*  mascara de data
    $(id ou class).mask('00/00/0000', {placeholder: '__/__/____' })
    
    exemplo de input para placa de carro
    $(xxxxx).mask('SSS-0000',{placeholder: 'ABC-1111'})
    
    */
})