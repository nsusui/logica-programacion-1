
let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));
let num3 = Number(prompt("Introduce el tercer número:"));


if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Por favor, asegúrate de ingresar solo números.");
} else {
   
    if (num1 === num2 && num2 === num3) {
        console.log("Los tres números son iguales.");
    } else {
        
        let mayorAMenor = [num1, num2, num3].sort((a, b) => b - a);
        console.log("Números de mayor a menor: " + mayorAMenor.join(", "));

       
        let menorAMayor = [num1, num2, num3].sort((a, b) => a - b);
        console.log("Números de menor a mayor: " + menorAMayor.join(", "));
    }
}