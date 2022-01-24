function exercicio01(arrayAlfaNumerico) {
    let arrayLetras = arrayAlfaNumerico.filter((item) => (typeof item == "string"));
    let arrayNumeros = arrayAlfaNumerico.filter((item) => (typeof item == "number"));
    let maxValue = Math.max(...arrayNumeros);
}

function create_random_string() {
    var randomId = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < 17; i++) {
        if (i == 4 || i == 8 || i == 12) {
            randomId += '-'
        }
        randomId += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    console.log(randomId)
}


class Operacoes {
    constructor() {
        this.objeto = new Map();
    }

    add(arrayValores) {
        this.objeto.set('soma', arrayValores.reduce(reducer));
    }

    multiply(arrayValores) {
        var res = 1;
        arrayValores.forEach(element => {
            res *= element
        });
        this.objeto.set('multiplicacao', res)
    }

    division(a, b) {
        if (b == 0) {
            this.objeto.set('divisao', 0);
        } else {
            this.objeto.set('divisao', (a / b));
        }
    }

    subtract(arrayValores) {
        this.objeto.set('subtracao', arrayValores.reduceRight((res, el, i, arr) => {
            return (i == 0) ? res : res.concat(el - arr[i - 1]);
        }, []).reverse())
    }
}