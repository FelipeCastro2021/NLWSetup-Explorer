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
const button = document.querySelector("header button");

function addHabit() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dateExists = nlwSetup.dayExists(today);

  if (dateExists) {
    alert("Dia já incluso");
    return
  } 

  nlwSetup.addDay(today);
}

function saveHabit() {
  localStorage.setItem('NLWSetup@Habits', JSON.stringify(nlwSetup.data))
}

button.addEventListener("click", addHabit)
form.addEventListener("change", saveHabit);

/* nlwSetup.setData({
  run: ["18-01", "19-01", "20-01"],
  water: ["18-01", "19-01", "20-01"],
  food: ["18-01", "19-01", "20-01"]
}) */

/* const data = {
  run: ["18-01", "19-01", "20-01"],
  water: ["19-01", "20-01"],
  food: ["18-01", "19-01"],
  book: ["20-01", "22-01"],
  programming: [
    "18-01",
    "19-01",
    "20-01",
    "21-01",
    "22-01",
    "23-01",
    "24-01",
    "25-01"
  ]
}
*/

const data = JSON.parse(localStorage.getItem('NLWSetup@Habits')) || {}
nlwSetup.setData(data)
nlwSetup.load() 
