let Pessoas = []


let pessoa = {
		nome, idade, nacionalidade
}
let Maiores = []
let registros = []
let cadastros = []


function registrar() {
	let nome = document.querySelector("#nome");
	let idade = document.querySelector("#idade");
	let nacionalidade = document.querySelector("#nacionalidade") 

	let pessoa = {
		nome: nome.value,
		idade: Number(idade.value),
		nacionalidade : nacionalidade.value
	}
	

	Pessoas.push(pessoa);
	let cadastros = document.createElement("li");
	
	cadastros.innerHTML = `${pessoa.nome}, ${pessoa.idade} de Nacionalidade ${pessoa.nacionalidade}`;
	let registrados = document.querySelector("#registrados");
	registrados.appendChild(cadastros);
	
	Maiores = obterMaisVelho(Pessoas);

	registros = Maiores [0];

	let pessoasMaisVelhas = document.querySelector("#compara");
	pessoasMaisVelhas.innerHTML =`${registros.nome}, é o mais velho ${registros.idade}`;

}

//comparação do mais velho

function obterMaisVelho() {
	let maisVelhos = [ Pessoas[0] ]
	for(let registros of Pessoas.slice(1)) {
		
		if (registros.idade > maisVelhos[0].idade) {
			maisVelhos = [ registros ]
		}
		else if (registros.idade === maisVelhos[0].idade) {
			maisVelhos.push(registros)
		}
	}
	return maisVelhos
}