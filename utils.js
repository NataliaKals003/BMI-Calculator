export function notNumber(value) {
    return isNaN(value) || value == "" //é uma funcao que checa se nao é um numero

}

export function calculateBMI(weight, height) {
    return(weight / ((height / 100) ** 2)).toFixed(2);
}