jQuery(function ($) {

    var contact_form = $('#contactForm');

    /* message used on contact submit success */
    var success_msg = 'O seu e-mail foi enviado com sucesso. Em breve entraremos em contato.';

    /* message used for error of the contact form */
    var general_error_msg = 'Indiponível, tente novamente mais tarde.';
    
    $('#msgEnviar').hide();

    /* on contact form submit */
    contact_form.submit(function (event) {

        event.preventDefault();

        var error = false;
        var error_msg = "";

        /* check message is not empty */
        if ($('#mensagem').val() === "") {
            error_msg = "Por favor, informe a sua mensagem";
            error = true;
        }
        
        /* check email is not empty */
        if ($('#assunto').val() === "") {
            error_msg = "Por favor, informe o assunto";
            error = true;
        }

        /* check email is not empty */
        if ($('#email').val() === "") {
            error_msg = "Por favor, informe o seu e-mail";
            error = true;
        }

        /* check name is not empty */
        if ($('#nome').val() === "") {
            error_msg = "Por favor, informe o seu nome";
            error = true;
        }
            
        /* if inputs are not empty */
        if (error === false) {
            var dadosFormularios = contact_form.serialize();
            $('#msgEnviar').show();
            $('#botao').hide();
            var result;
            $.ajax({
                type: 'post',
                url: 'matheussilvestre3@gmail.com',
                data: dadosFormularios,
                dataType: 'json',
                success: function (r) {
                    if (r === true) {
                        /* successfully submitted */
                        $('#msgEnviar').hide();
                        $('#botao').show();
                        result = '<div class="alert alert-success">' + success_msg + '</div>';
                        $("#alert-area").html(result);
                        $('#nome').val("");
                        $('#assunto').val("");
                        $('#telefone').val("");
                        $('#email').val("");
                        $('#mensagem').val("");
                    } else {
                        /* not submitted - error */
                        result = '<div class="alert alert-danger">' + general_error_msg + '</div>';
                        $("#alert-area").html(result);
                        $('#msgEnviar').hide();
                        $('#botao').show();
                    }
                }
            });
        } else {
            result = '<div class="alert alert-danger">' + error_msg + '</div>';
            $("#alert-area").html(result);
            $('#msgEnviar').hide();
            $('#botao').show();
        }

    });

});