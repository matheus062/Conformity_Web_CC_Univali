function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function somenteLetrasNumeros(e) {
    if(navigator.appName === "Netscape") {
        key = e.charCode; //or e.which; (standard method)
        var expressao = /[a-z0-9]/;
    } else {
        key = e.keyCode;
        var expressao = /[a-z0-9]/;
    }
    if (key === 8 || key === 0) {
        return true;
    } else {
        if (expressao.test(String.fromCharCode(key))){
            return true;
        } else {
            return false;
        }
    }
}

function SomenteNumero(e) {
    if(navigator.appName === "Netscape") {
        var tecla = e.charCode;
    } else {
        var tecla = e.keyCode;
    }
    if (tecla > 47 && tecla < 58) {
        return true;
    }
    return false;
}

function VerificaPorcentagem(numero, e) {
    if (SomenteNumero(e) === false) {
       return false;
    } else if (numero.value.length > 2) {
        return false;
    }
    return true;
}

function VerificaNumero(numero, e) {
    if (SomenteNumero(e) === false) {
       return false;
    } else if (numero.value.length > 9) {
        return false;
    }
    return true;
}

// JavaScript Document
//adiciona mascara de cnpj
function MascaraCNPJ(cnpj, e) {
    if (SomenteNumero(e) === false) {
        e.returnValue = false;
    }
    return formataCampo(cnpj, '00.000.000/0000-00', e);
}

//adiciona mascara de cep
function MascaraCep(cep, e) {
    if (SomenteNumero(e) === false) {
        e.returnValue = false;
    }
    return formataCampo(cep, '00000-000', e);
}

//adiciona mascara de data
function MascaraData(data, e) {
    if (mascaraInteiro(e) === false) {
        e.returnValue = false;
    }
    return formataCampo(data, '00/00/0000', e);
}

//adiciona mascara ao telefone
function MascaraTelefone(tel, e) {
    if (mascaraInteiro(e) === false) {
        e.returnValue = false;
    }
    if (tel.value.length >= 14) {
        return formataCampo(tel, '(00) 00000-0000', e);
    } else {
        return formataCampo(tel, '(00) 0000-0000', e);
    }
}

//adiciona mascara ao CPF
function MascaraCPF(cpf, e) {
    if (SomenteNumero(e) === false) {
        e.returnValue = false;
    }
    if (cpf.value.length > 14) {
        MascaraCNPJ(cpf, e);
    } else {
        return formataCampo(cpf, '000.000.000-00', e);
    }
}

//valida telefone
function ValidaTelefone() {
    var telefone = $('#telefone').val();
    if (telefone === '') {
        return true;
    }
    if (telefone.length > 14) {
        exp = /\(\d{2}\)\ \d{5}\-\d{4}/;
    } else {
        exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
    }
    if (!exp.test(telefone)) {
        bootbox.alert('Número de Telefone Inválido!');
        return false;
    } else {
        return true;
    }
}

//valida celular
function ValidaCelular() {
    var celular = $('#celular').val();
    if (celular === '') {
        return true;
    }
    if (celular.length > 14) {
        exp = /\(\d{2}\)\ \d{5}\-\d{4}/;
    } else {
        exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
    }
    if (!exp.test(celular)) {
        bootbox.alert('Número de Celular Inválido!');
        return false;
    } else {
        return true;
    }
}

//valida whatsapp
function ValidaWhatsapp() {
    var whatsapp = $('#whatsapp').val();
    if (whatsapp === '') {
        return true;
    }
    if (whatsapp.length > 14) {
        exp = /\(\d{2}\)\ \d{5}\-\d{4}/;
    } else {
        exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
    }
    if (!exp.test(whatsapp)) {
        bootbox.alert('Número de WhatsApp Inválido!');
        return false;
    } else {
        return true;
    }
}

//valida CEP
function ValidaCep(cep) {
    exp = /\d{2}\.\d{3}\-\d{3}/
    if (!exp.test(cep.value))
        alert('Número de CEP Inválido!');
}

//valida data
function ValidaData(data) {
    exp = /\d{2}\/\d{2}\/\d{4}/
    if (!exp.test(data.value)) {
        bootbox.alert('Data Inválida!');
    }
}

function ValidarCPFCNPJ() {
    var cpfcnpj = $('#cnpj').val();
    if (cpfcnpj.length > 14) {
        var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
        var dig1 = 0;
        var dig2 = 0;

        exp = /\.|\-|\//g;
        cpfcnpj = cpfcnpj.toString().replace(exp, "");
        var digito = eval(cpfcnpj.charAt(12) + cpfcnpj.charAt(13));

        for (i = 0; i < valida.length; i++) {
            dig1 += (i > 0 ? (cpfcnpj.charAt(i - 1) * valida[i]) : 0);
            dig2 += cpfcnpj.charAt(i) * valida[i];
        }
        dig1 = (((dig1 % 11) < 2) ? 0 : (11 - (dig1 % 11)));
        dig2 = (((dig2 % 11) < 2) ? 0 : (11 - (dig2 % 11)));

        if (((dig1 * 10) + dig2) !== digito) {
            bootbox.alert('CNPJ Inválido!');
            retorno = false;
        } else {
            retorno = true;
        }
    } else {
        exp = /\.|\-/g;
        cpfcnpj = cpfcnpj.toString().replace(exp, "");
        var digitoDigitado = eval(cpfcnpj.charAt(9) + cpfcnpj.charAt(10));
        var soma1 = 0, soma2 = 0;
        var vlr = 11;

        for (i = 0; i < 9; i++) {
            soma1 += eval(cpfcnpj.charAt(i) * (vlr - 1));
            soma2 += eval(cpfcnpj.charAt(i) * vlr);
            vlr--;
        }
        soma1 = (((soma1 * 10) % 11) === 10 ? 0 : ((soma1 * 10) % 11));
        soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

        var digitoGerado = (soma1 * 10) + soma2;
        if (digitoGerado !== digitoDigitado) {
            bootbox.alert('CPF Inválido!');
            retorno = false;
        } else {
            retorno = true;
        }
    }
    return retorno;
}

//valida o CPF digitado
function ValidarCPF() {    
    var cpf = $('#cpf').val();
    exp = /\.|\-/g;
    cpf = cpf.toString().replace(exp, "");
    var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
    var soma1 = 0, soma2 = 0;
    var vlr = 11;

    for (i = 0; i < 9; i++) {
        soma1 += eval(cpf.charAt(i) * (vlr - 1));
        soma2 += eval(cpf.charAt(i) * vlr);
        vlr--;
    }
    soma1 = (((soma1 * 10) % 11) === 10 ? 0 : ((soma1 * 10) % 11));
    soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

    var digitoGerado = (soma1 * 10) + soma2;
    if (digitoGerado !== digitoDigitado) {
        bootbox.alert('CPF Inválido!');
        return false;
    } else {
        return true;
    }
}

//valida numero inteiro com mascara
function mascaraInteiro(e) {
    if(navigator.appName === "Netscape") {
        if (e.charCode < 48 || e.charCode > 57) {
            e.returnValue = false;
            return false;
        }
    } else {
        if (e.keyCode < 48 || e.keyCode > 57) {
            e.returnValue = false;
            return false;
        }
    }
    return true;
}

//valida o CNPJ digitado
function ValidarCNPJ(ObjCnpj) {
    var cnpj = ObjCnpj.value;
    var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
    var dig1 = new Number;
    var dig2 = new Number;

    exp = /\.|\-|\//g;
    cnpj = cnpj.toString().replace(exp, "");
    var digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

    for (i = 0; i < valida.length; i++) {
        dig1 += (i > 0 ? (cnpj.charAt(i - 1) * valida[i]) : 0);
        dig2 += cnpj.charAt(i) * valida[i];
    }
    dig1 = (((dig1 % 11) < 2) ? 0 : (11 - (dig1 % 11)));
    dig2 = (((dig2 % 11) < 2) ? 0 : (11 - (dig2 % 11)));

    if (((dig1 * 10) + dig2) !== digito) {
        bootbox.alert('CNPJ Inválido!');
    }

}

//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) {
    var boleanoMascara;

    if(navigator.appName === "Netscape") {
        var Digitato = evento.charCode;
    } else {
        var Digitato = evento.keyCode;
    }
    exp = /\-|\.|\/|\(|\)| /g;
    campoSoNumeros = campo.value.toString().replace(exp, "");

    var posicaoCampo = 0;
    var NovoValorCampo = "";
    var TamanhoMascara = campoSoNumeros.length;
    ;

    if (Digitato !== 8) { // backspace 
        for (i = 0; i <= TamanhoMascara; i++) {
            boleanoMascara = ((Mascara.charAt(i) === "-") || (Mascara.charAt(i) === ".")
                    || (Mascara.charAt(i) === "/"));
            boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === "(")
                    || (Mascara.charAt(i) === ")") || (Mascara.charAt(i) === " "));
            if (boleanoMascara) {
                NovoValorCampo += Mascara.charAt(i);
                TamanhoMascara++;
            } else {
                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                posicaoCampo++;
            }
        }
        campo.value = NovoValorCampo;
        return true;
    } else {
        return true;
    }
}

//Somente números e vírgulas
function moeda(e)
{
    var tecla = (window.event) ? e.keyCode : e.which;
    if (tecla === 8 || tecla === 0)
        return true;
    if (tecla !== 44 && tecla < 48 || tecla > 57)
        return false;
}

function formatarMoeda(num) {

    x = 0;

    if (num < 0) {
        num = Math.abs(num);
        x = 1;
    }
    if (isNaN(num))
        num = "0";
    cents = Math.floor((num * 100 + 0.5) % 100);

    num = Math.floor((num * 100 + 0.5) / 100).toString();

    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + '.'
                + num.substring(num.length - (4 * i + 3));

    ret = num + ',' + cents;

    if (x === 1) 
        ret = ' - ' + ret;
    return ret;

}

function mascMoeda(a, e, r, t) {
    let n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
    if (13 == o || 8 == o)
        return !0;
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
        ;
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "0" + r + "0" + l),
    2 == u && (a.value = "0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "",
        tamanho2 = ajd2.length,
        h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}


//Função para criptografar string em base64
function base64_encode(data) {
    // http://kevin.vanzonneveld.net
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara
    // +   improved by: Thunder.m
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Pellentesque Malesuada
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Rafał Kukawski (http://kukawski.pl)
    // *     example 1: base64_encode('Kevin van Zonneveld');
    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof this.window['btoa'] === 'function') {
    //    return btoa(data);
    //}
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            enc = "",
            tmp_arr = [];

    if (!data) {
        return data;
    }

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}