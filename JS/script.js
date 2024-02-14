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

    $('form').validate({
        rules:{
            nome: {
                required: true
            }, email: {
                required: true,
                email:true
            }, telefone: {
                required: true
            },
            menssagem: {
                required: true
            },
            veiculo: {
                required:  false
            }
        },
        menssages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(e, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-carro button').click(function(){
        const destino = $('#contato')
        const veiculo =  $(this).parent().find('h3').text()


        $('#veiculo-interesse').val(veiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})