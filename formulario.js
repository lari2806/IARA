const estadosECidades = {
    "AC": ["Rio Branco", "Cruzeiro do Sul"],
    "AL": ["Maceió", "Arapiraca"],
    "AM": ["Manaus", "Parintins"],
    "AP": ["Macapá", "Macapá"],
    "BA": ["Salvador", "Bahia"],
    "CE": ["Fortaleza", "Ceará"],
    "DF": ["Brasília", "Distrito Federal"],
    "ES": ["Vitória", "Espírito Santo"],
};

window.onload = function() {
    const estadoSelect = document.getElementById('estado');
    for (let estado in estadosECidades) {
        let option = document.createElement('option');
        option.value = estado;
        option.text = estado;
        estadoSelect.add(option);
    }
};

function carregarCidades() {
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');
    const cidades = estadosECidades[estadoSelect.value];

    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';

    if (cidades) {
        cidades.forEach(cidade => {
            let option = document.createElement('option');
            option.value = cidade;
            option.text = cidade;
            cidadeSelect.add(option);
        });
    }
}