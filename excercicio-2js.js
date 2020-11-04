let name1 = prompt("Digite o nome da primeira pessoa");
let age1 = prompt("Digite a idade da primeira pessoa");

let name2 = prompt("Digite o nome da segunda pessoa");
let age2 = prompt("Digite a idade da segunda pessoa");

let name3 = prompt("Digite o nome da  pessoa");
let age3 = prompt("Digite a idade da segunda pessoa");


console.log(`Registro de ${name1} e ${name2} ${name3}`); 
console.log(`Idade de: ${name1} ${age1}`);
console.log(`Idade de: ${name2} ${age2}`);
console.log(`Idade de: ${name3} ${age3}`);

if (age1 > age2 && age1 > age3) {
    console.log(`${name1} "é mais velho/a que" ${name2} "e" ${name3}`)
}
   else if(age2 > age3 && age2 > age1) {
        console.log(`${name2} "é mais velho/a que" ${name3} "e" ${name1}`)
    }
    
    else if(age3 > age2 && age3 > age1){
        console.log(`${name3} "é mais velho/ a que" ${name2} "e" ${name1}`)
    } 