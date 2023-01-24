module.exports = {
    Integer: isInteger
};

function isInteger(str) {
    // Utilizar expresiones regulares para verificar si el string tiene solo dígitos
    if(/^\d+$/.test(str)){
        // Utilizar el método parseInt() para analizar el string y convertirlo a un entero
        let num = parseInt(str);
        // Comprobar si el resultado es igual al string original
        return num == str;
    }
    return false;
}