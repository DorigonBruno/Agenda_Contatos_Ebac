const form = document.querySelector("form");
const inputNome = document.querySelector(".nome");
const inputTelefone = document.querySelector(".telefone");
const nomes = [];
const telefones = [];

let linhas = "";

function adicionarButton(e) {
  e.preventDefault();
  validaInput();
  atualizaTabela();
}

function validaInput() {
  const nome = inputNome.value;
  const telefone = inputTelefone.value;
  const telefonesTamanho = telefones.length;

  nomes.push(nome);
  telefones.push(telefone);

  console.log(telefonesTamanho);

  let linha = "<tr>";
  linha += `<td>${nome}</td>`;
  linha += `<td>${telefone}</td>`;
  linha += "</tr>";

  linhas += linha;

  inputNome.value = "";
  inputTelefone.value = "";
}

function atualizaTabela() {
  const tabela = document.querySelector("tfoot");

  tabela.innerHTML = linhas;
}

form.addEventListener("submit", adicionarButton);
