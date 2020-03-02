//os exercicios de 1 a 6 foram feitos de forma a serem dinamicos
// 1 a 3 tem que inserir as strings 
//4 a 6 as infos podem ser alteradas, mas já vem com o valor sugerido pelo exercicio
// 7 a 10 é estático 
// 96055510
const botoes = document.querySelectorAll('button');
const arrayObjetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
];

function e1(arg1, arg2){
    if (arg1 || arg2){
        const teste = arg1.length > arg2.length ? "A primeira string é maior" :  arg2.length > arg1.length ? "A segunda string é maior" : "As strings são do mesmo comprimento";
        return teste;
    }else{
        const teste = "Argumentos vazios";
        return teste;
    }
    // return teste;
};

function e2(func, arg1, arg2){
    const res =  func(arg1,arg2);
    return res;
};

function concatena4Strings(str1, str2, str3, str4){
    if(str1 || str2 || str3|| str4){
        const res = str1 + ' ' + str2 + ' ' + str3 + ' ' + str4;
        return res;
    }else{
        const res = "Strings vazias";
        return res;
    }
}

//usar regex
function removeNumeros(str){
    let strArray = str.split('');
    //map, ou manter como string e usar for... in 
    for(let i = 0; i < str.length; i++){
        //verificando se o carcter é um numero
        if (str[i] > 0){
            strArray.splice(i, 1, "[removido]");
        }
    }
    let srtString = strArray.toString();
    let result = srtString.replace(/,/g, "");
    return result;
};

// {4: 'a', 3: 'e', 1: 'i', 5: 's'}
function traduzNumeros(str){
    //for ... in
    //mas é melhor de trabalhar com array 
    let strArray = str.split('');
    for(let i = 0; i < str.length; i++){
        switch (str[i]){
            case '1':
                strArray.splice(i,1,"i");
                break;
            case '3':
                strArray.splice(i,1,"e");
                break;
            case '4':
                strArray.splice(i,1,"a");
            break;
            case '5':
            strArray.splice(i,1,"s");
            break;
        }
    }
    let srtString = strArray.toString();
    let result = srtString.replace(/,/g, "");
    return result;
};

function validaCep(cep){
    const cepModel = /^[0-9]{8}$/;
    const cepinho = cepModel.test(cep);
    if (cepModel.test(cep)){
        return true;
    }else{
        return false;
    }
}

function buscaCEP(cep){
    if(validaCep(cep)){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => {
            res.json().then(body => {
                const rua = body.logradouro;
                const bairro = body.bairro;
                const cidade = body.localidade;
                const estado = body.uf;
                const endereco = rua + ', ' + bairro + ', ' + cidade + '/' + estado;
                console.log(endereco);
                alert(endereco);
            })
        })
    } else{
        alert('cep invalido');
    } 
};

function primeiraMaiuscula(nome){
    const primeiraLetra = nome.charAt(0);
    const primeiraLetraMaiuscula = primeiraLetra.toUpperCase();
    const nomeNovo = nome.replace(primeiraLetra, primeiraLetraMaiuscula);
    return nomeNovo;
};

function olaNome(pessoas){
    const e7 =  document.querySelector('#e7');
    pessoas.forEach(pessoa =>{
        let nome = primeiraMaiuscula(pessoa.nome);
        let sobrenome = primeiraMaiuscula(pessoa.sobrenome)
        let conteudo = `<p>Olá, ${nome} ${sobrenome}!</p> <br>`;
        e7.insertAdjacentHTML('beforeend', conteudo);
    });
};

function somaIdades(pessoas){
    const e8 = document.querySelector('#e8');
    const idades = pessoas.reduce((total, pessoa) => {
            return total += (pessoa.idade);
        }, 0);
    e8.insertAdjacentHTML('beforeend',`<p>A soma das idades é: ${idades}</p><br>`);
};

function menor25(pessoas){
    const e9 = document.querySelector('#e9');
    pessoas.forEach(pessoa => {
        if(pessoa.idade < 25){
            let nome = primeiraMaiuscula(pessoa.nome);
            let sobrenome = primeiraMaiuscula(pessoa.sobrenome)
            let conteudo = `<p> ${nome} ${sobrenome}, idade: ${pessoa.idade} </p> <br>`
            e9.insertAdjacentHTML('beforeend', conteudo);
        }
    });
};

function menor30(pessoas){
    const e10 = document.querySelector('#e10');
    pessoas.forEach(pessoa =>{
        if(pessoa.idade < 30){
            let nome = primeiraMaiuscula(pessoa.nome);
            let sobrenome = primeiraMaiuscula(pessoa.sobrenome)
            let conteudo = `<p> ${nome} ${sobrenome}, idade: ${pessoa.idade} </p> <br>`
            e10.insertAdjacentHTML('beforeend', conteudo);
        }
    });
};

//crescente
// se a menor que zero, a é posicionado antes de b
// se a maior que zero, a é posicionado depois de b
// se a igual a zero, a e b permanecem com as posições inalteradas
//decrescente
function ordenaPessoas(pessoas){
    const e11 = document.querySelector('#e11');
    //pra não alterar o array original
    console.log(pessoas);
    const pessoasCopy = pessoas;
    pessoasCopy.sort((a,b)=>{
        if(b.idade - a.idade == 0){
            if(a.id < b.id){
                return -1;
            }else{
                return 1;
            }
        }
        return b.idade - a.idade;
    });
    pessoasCopy.forEach(pessoa =>{
        let nome = primeiraMaiuscula(pessoa.nome);
        let sobrenome = primeiraMaiuscula(pessoa.sobrenome)
        let conteudo = `<p>ID: ${pessoa.id} - ${nome} ${sobrenome}, idade: ${pessoa.idade} </p> <br>`
        e11.insertAdjacentHTML('beforeend', conteudo);
    });
};

botoes[0].onclick = function(){
    const arg1 = document.querySelector('#e1arg1').value;
    const arg2 = document.querySelector('#e1arg2').value;
    const res =  e1(arg1,arg2);
    alert(res);
};

botoes[1].onclick = function (){
    const str1 = document.querySelector('#e2arg1').value;
    const str2 = document.querySelector('#e2arg2').value;
    const res = e2(e1, str1, str2);
    alert(res);
};

botoes[2].onclick = function (){
    const arg1 = document.querySelector('#e3arg1').value;
    const arg2 = document.querySelector('#e3arg2').value;
    const arg3 = document.querySelector('#e3arg3').value;
    const arg4 = document.querySelector('#e3arg4').value;
    const res = concatena4Strings(arg1, arg2, arg3, arg4);
    alert(res);
};

botoes[3].onclick = function(){
    const str = document.querySelector('#e4arg1').value;
    const res = removeNumeros(str);
    alert(res);
};

botoes[4].onclick = function(){
    const arg1 = document.querySelector('#e5arg1').value;
    const res = traduzNumeros(arg1);
    alert(res);
};
    
botoes[5].onclick = function(){
    const arg1 = document.querySelector('#e6arg1').value;
    alert(arg1);
    buscaCEP(arg1);
    //primeiro o alert(res) como undefined ainda e dps retorno da buscacep 
};

olaNome(arrayObjetos);

somaIdades(arrayObjetos);

menor25(arrayObjetos);

menor30(arrayObjetos);

ordenaPessoas(arrayObjetos);

// const ul = document.getElementById("usuarios");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(json => listaUsuarios(json));

// function listaUsuarios(usuarios) {
//     console.log(usuarios);
//   usuarios.forEach(({name, username, email}) => {
//     const li = document.createElement("li");
//     li.innerText = `Nome: ${name}, Usuário: ${username}, E-mail: ${email}`;
//     ul.appendChild(li);
//   })
// }
