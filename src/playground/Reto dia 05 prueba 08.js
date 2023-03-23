// console.log();
console.log("Encuentra el mayor palíndromo\n");
console.log(findLargestPalindrome(["racecar", "level", "world", "hello"]));
console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"]));

function findLargestPalindrome(words) {
    let capicua = null;
    let maximo=0;

    words.forEach(palabra => {
        let esPalindromo = false;
        let mayor = "";
        let inversa = "";
        for(var i=0; i < palabra.length; i++) {
            inversa = palabra[i] + inversa;
        }
        esPalindromo = (palabra == inversa);
        if (esPalindromo && palabra.length > maximo)
        {
            maximo = palabra.length;
            capicua = palabra;
        }
    });
    // Tu código aquí 👈
    return capicua;
}

/**
 * Ejemplo 1:

Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Ejemplo 2:

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null
 */
