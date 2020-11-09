function buscarCep() {
    let cep = document.getElementById('cep');
    let logradouro = document.getElementById('logradouro');
    let localidade = document.getElementById('localidade');
    let uf = document.getElementById('uf');
    let bairro = document.getElementById('bairro');
    let complemento = document.getElementById('complemento');

    let url = 'http://viacep.com.br/ws/' + cep.value + '/json/';
    fetch(url, {method: 'GET'})
            .then(response => {
            response.json()
            .then(data => {
                    logradouro.value = data.logradouro;
                    localidade.value = data.localidade;
                    uf.value = data.uf;
                    bairro.value = data.bairro;
                    complemento.value = data.complemento;
                })
        })
            .catch(err => {
                    logradouro.value = '';
                    localidade.value = '';
                    uf.value = '';
                    bairro.value = '';
                    complemento.value = '';
                alert('CEP não encontrado');
        })
}