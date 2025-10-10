// Aguarda todo o conteúdo da página ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function () {

  // Seleciona os campos de CPF, telefone e CEP do formulário pelo ID
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  // Máscara para CPF
  cpf.addEventListener("input", () => {
    cpf.value = cpf.value
      // Remove todos os caracteres que não são números
      .replace(/\D/g, "")
      // Insere um ponto após os três primeiros dígitos
      .replace(/(\d{3})(\d)/, "$1.$2")
      // Insere outro ponto após os seis primeiros dígitos
      .replace(/(\d{3})(\d)/, "$1.$2")
      // Insere o hífen antes dos dois últimos dígitos
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  });

  // Máscara para Telefone
  telefone.addEventListener("input", () => {
    telefone.value = telefone.value
      // Remove tudo que não for número
      .replace(/\D/g, "")
      // Adiciona os parênteses em volta do DDD
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      // Adiciona o hífen após o quinto dígito do número
      .replace(/(\d{5})(\d)/, "$1-$2");
  });

  // Máscara para CEP
  cep.addEventListener("input", () => {
    cep.value = cep.value
      // Remove tudo que não for número
      .replace(/\D/g, "")
      // Insere um hífen após os cinco primeiros dígitos
      .replace(/(\d{5})(\d)/, "$1-$2");
  });
});
