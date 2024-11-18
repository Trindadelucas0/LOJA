// Função para atualizar o total do carrinho
function update() {
  const cartItems = document.getElementsByClassName("cart-item");
  let total = 0;

  // Itera por todos os itens e soma o valor total
  for (let i = 0; i < cartItems.length; i++) {
    const priceText = cartItems[i].getElementsByClassName("cart-item-price")[0].innerText;
    const price = parseFloat(priceText.replace('R$', '').replace(',', '.').trim()); // Remove 'R$' e converte para float
    const quantity = cartItems[i].getElementsByClassName("cart-item-quantity")[0].value;
    total += price * quantity; // Atualiza o total
  }

  // Atualiza o total na página
  document.querySelector(".cart-total-price").innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;


// Adicionando o evento de remoção ao botão "Remover"
const removebotao = document.getElementsByClassName("btn-remove");

for (let i = 0; i < removebotao.length; i++) {
  removebotao[i].addEventListener("click", function(event) {
    event.target.parentElement.parentElement.remove(); // Remove o item do carrinho
    update(); // Chama a função update para atualizar o total
  });
}

// Adicionando o evento de alteração da quantidade para atualizar o total
const inputclass = document.getElementsByClassName("cart-item-quantity");

for (let i = 0; i < inputclass.length; i++) {
  inputclass[i].addEventListener("change", update);
}
// Adicionando o evento de clique para os itens do carrinho
const addprodutocarrinho = document.querySelectorAll("#carro");

for (let j = 0; j < addprodutocarrinho.length; j++) {
  addprodutocarrinho[j].addEventListener("click", addproduto);
}


}
// Inicialização: Atualizar o total ao carregar a página
update();

