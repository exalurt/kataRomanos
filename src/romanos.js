var tabla = [
    { letra : 'M',  valor : 1000 },
    { letra : 'CM', valor : 900 },
    { letra : 'D',  valor : 500 },
    { letra : 'CD', valor : 400 },
    { letra : 'C',  valor : 100 },
    { letra : 'XC', valor : 90 },
    { letra : 'L',  valor : 50 },
    { letra : 'XL', valor : 40 },
    { letra : 'X',  valor : 10 },
    { letra : 'IX', valor : 9 },
    { letra : 'V',  valor : 5 },
    { letra : 'IV', valor : 4 },
    { letra : 'I',  valor : 1 }
];

module.exports = function(entrada) {
    var resultado = '';
    var valor = new Number(entrada);

    if(valor <= 0) return resultado;

    tabla.forEach(function(item){
        while(valor >= item.valor){
            resultado += item.letra;
            valor -= item.valor;
        };
    });

    return resultado;
};
