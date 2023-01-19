/* function exibir(mensagem) {
  return mensagem
}

const resultado = exibir("Obrigado por continuar sempre buscando conhecimento")

console.log(resultado) */

/* ============================================================== */

/* const celular = {
  cor: "preto",
  ligar: function () {
    const mensagem = "Ligando"
    alert(mensagem)
  }
}

celular.ligar() */

/* ============================================================== */

/* const inputs = document.querySelectorAll("input")

inputs.forEach(input => input.click()) */

/* ============================================================== */

const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

/* nlwSetup.setData({
  run: ["18-01", "19-01", "20-01"],
  water: ["18-01", "19-01", "20-01"],
  food: ["18-01", "19-01", "20-01"]
}) */

const data = {
  run: ["18-01", "19-01", "20-01"],
  water: ["19-01", "20-01"],
  food: ["18-01", "19-01"],
  book: ["20-01", "22-01"],
  programming: ["18-01", "19-01", "20-01", "21-01", "22-01"]
}

nlwSetup.setData(data)
nlwSetup.load()
