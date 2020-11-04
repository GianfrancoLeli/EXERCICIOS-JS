//let flag_mas_registros = true;
//let personas = [];
//let persona = new Object();

//while (flag_mas_registros){
	//let name1 = prompt("Digite o nome da pessoa");
	//let age1 = prompt("Digite a idade da pessoa");
        //let nationality1 = prompt("Digite a Nacionalidade");
	//persona = { name: name1, age: age1, nationality: nationality1 };
	//personas.push(persona);
	//let flag = prompt("Deseja registrar outra pessoa? (S/N)");
	//if (flag == "S"){
		//flag_mas_registros = true;
	//}else{
		//flag_mas_registros = false;
	//}
//}
//for (var i = 0; i < personas.length; i++){
	//console.log(personas[i]);
	//console.log("Nombre: "+personas[i].name+", Edad: "+personas[i].age+", Nacionalidade: "+personas[i].nationality);
//}

let registros = []

while (true) {
	let nome = prompt ('Digite o nome da pessoa');
	let idade
	while (true) {
		idade = Number(prompt('Digite a idade da pessoa'));
		if (! Number.isNaN (idade)) {
			break
		}
		alert('Idade inválida, por favor digite um número');
	}

	let nationality = prompt('Qual é a nacionalidade').toLowerCase();
	nationality = nationality[0].toUpperCase() + nationality.slice(1);

	let pessoa = {
		nome, idade,
		pais: nationality
	}
	registros.push(pessoa);

	let novoRegistro = confirm('Deseja adicionar um novo registro?');
	if (novoRegistro === false) {
		break
	}
}

console.table(registros);
console.log(registros);

let maisVelhos = osMaisVelhos(registros);
console.log('Registro de pessoas mais velhas:');

for(let pessoa of maisVelhos) {
	console.log(`${pessoa.nome}: ${pessoa.idade} anos`)
}

let tiposDeNacionalidade = AgrupamentoNacionalidade(registros)

for (let pais of Object.keys(tiposDeNacionalidade)) {
	console.log(`Tipos de pessoas com nacionalidade ${pais}:`)
	for (let pessoa of tiposDeNacionalidade[pais]) {
		console.log(`- ${pessoa.nome}`)
	}
}

function osMaisVelhos(registros) {
	let maisVelhos = [ registros[0] ]
	
	for (let registro of registros.slice(1)) {
		if (registro.idade > maisVelhos[0].idade) {
			maisVelhos = [ registro ]
		}else if (registro.idade === maisVelhos[0].idade) {
			maisVelhos.push(registro)
		}
	}
	return maisVelhos
}

function AgrupamentoNacionalidade(registros) {
	let tiposDeNacionalidade = {}

	for (let registro of registros) {
		if (typeof tiposDeNacionalidade[registro.pais] === 'undefined') {
			tiposDeNacionalidade[registro.pais] = [registro]
		} else{
			tiposDeNacionalidade[registro.pais].push(registro)
		}
	}

return tiposDeNacionalidade
}