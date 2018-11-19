const functions = {
    calculate: (numero) => {
        if(!seNumeroValido(numero)) return null;
        var resultado = 1;
        if(numero === 0 || numero === 1) return 1

        for (var i = 2; i <= numero; i++) {
            resultado = resultado * i;            
        }
        return resultado;
    }
}    
function seNumeroValido(numero){
    return (numero !== undefined)
        && (numero > -1)
        && (typeof(numero) != 'string')
};

module.exports = functions;

 
