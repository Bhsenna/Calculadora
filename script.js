function numero(valor){
    let tela = document.getElementById('tela')
    let conta = document.getElementById('conta')

    tela.innerHTML += valor
}

function operador(valor){
    let conta = document.getElementById('conta')
    let tela = document.getElementById('tela')

    if (conta.innerHTML==''){
        conta.innerHTML = tela.innerHTML + valor
        tela.innerHTML = ''
    }else if (tela.innerHTML!=''){
        if (conta.innerHTML.slice(-1)=='+'){
            tela.innerHTML = (parseFloat(conta.innerHTML) + parseFloat(tela.innerHTML))
        }else if (conta.innerHTML.slice(-1)=='-'){
            tela.innerHTML = (parseFloat(conta.innerHTML) - parseFloat(tela.innerHTML))
        }else if (conta.innerHTML.slice(-1)=='x'){
            tela.innerHTML = (parseFloat(conta.innerHTML) * parseFloat(tela.innerHTML))
        }else if (conta.innerHTML.slice(-1)=='÷'){
            tela.innerHTML = (parseFloat(conta.innerHTML) / parseFloat(tela.innerHTML))
        }
        conta.innerHTML = tela.innerHTML + valor
        tela.innerHTML = ''
    }else{
        conta.innerHTML = conta.innerHTML.slice(0, -1) + valor
        tela.innerHTML = ''
    }
}

function limpar(){
    let tela = document.getElementById('tela')
    let conta = document.getElementById('conta')
    tela.innerHTML = ''
    conta.innerHTML = ''
}

function apagar(){
    let tela = document.getElementById('tela')
    tela.innerHTML = tela.innerHTML.slice(0, -1)
}

function negativar(){
    let tela = document.getElementById('tela')

    tela.innerHTML = tela.innerHTML * (-1)
}

function calcular(){
    let tela = document.getElementById('tela')
    let conta = document.getElementById('conta')

    if (conta.innerHTML!=''){
        if (conta.innerHTML.slice(-1) == '='){
            var operador = conta.innerHTML.charAt(conta.innerHTML.indexOf('+'))
            if (operador==''){
                var operador = conta.innerHTML.charAt(conta.innerHTML.indexOf('x'))
            }
            if (operador==''){
                var operador = conta.innerHTML.charAt(conta.innerHTML.indexOf('÷'))
            }
            if (operador==''){
                var operador = conta.innerHTML.charAt(conta.innerHTML.indexOf('-'))
            }
            conta.innerHTML = tela.innerHTML + conta.innerHTML.slice(conta.innerHTML.lastIndexOf(operador))

            if (operador=='+'){
                tela.innerHTML = (parseFloat(tela.innerHTML) + parseFloat(conta.innerHTML.slice(conta.innerHTML.indexOf(operador)+1)))
            }else if (operador=='-'){
                tela.innerHTML = (parseFloat(tela.innerHTML) - parseFloat(conta.innerHTML.slice(conta.innerHTML.lastIndexOf(operador)+1)))
            }else if (operador=='x'){
                tela.innerHTML = (parseFloat(tela.innerHTML) * parseFloat(conta.innerHTML.slice(conta.innerHTML.indexOf(operador)+1)))
            }else if (operador=='÷'){
                tela.innerHTML = (parseFloat(tela.innerHTML) / parseFloat(conta.innerHTML.slice(conta.innerHTML.indexOf(operador)+1)))
            }

        }else{
            var operador = conta.innerHTML.slice(-1)
            conta.innerHTML = conta.innerHTML + tela.innerHTML + '='
            if (operador=='+'){
                tela.innerHTML = (parseFloat(conta.innerHTML) + parseFloat(tela.innerHTML))
            }else if (operador=='-'){
                tela.innerHTML = (parseFloat(conta.innerHTML) - parseFloat(tela.innerHTML))
            }else if (operador=='x'){
                tela.innerHTML = (parseFloat(conta.innerHTML) * parseFloat(tela.innerHTML))
            }else if (operador=='÷'){
                tela.innerHTML = (parseFloat(conta.innerHTML) / parseFloat(tela.innerHTML))
            }
        }
    }
}