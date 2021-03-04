const form = document.querySelector('#form');
const primeiroNome = document.querySelector("#primeiro-nome");
const ultimoNome = document.querySelector("#ultimo-nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

form.addEventListener('submit', (e) => {

      e.preventDefault();

      checkInputs();
});

function checkInputs() {
      const primeiroNomeValue = primeiroNome.value.trim();
      const ultimoNomeValue = ultimoNome.value.trim();
      const emailValue = email.value.trim();
      const senhaValue = senha.value.trim();



      if (primeiroNomeValue === "") {
            setErrorFor(primeiroNome, "O primeiro nome não pode estar vazio");
      } else {
            setSuccessFor(primeiroNome);
      }

      if (ultimoNomeValue === "") {
            setErrorFor(ultimoNome, "Ultimo Nome não pode estar vazio");
      } else {
            setSuccessFor(ultimoNome);
      }

      if (emailValue === "") {
            setErrorFor(email, "Parace que este não é um e-mail");
      } else if (!isEmail(emailValue)) {
            setErrorFor(email, "Por favor insira um endereço de e-mail válido")
      } else {
            setSuccessFor(email);
      }

      if (senhaValue === "") {
            setErrorFor(senha, "Senha não pode estar vazia")
      } else {
            setSuccessFor(senha);
      }

      if (primeiroNomeValue !== "" && ultimoNomeValue !== "" && emailValue !== "" && emailValue !== isEmail() && senhaValue !== "") {
            submit();
      }
}

function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector("small");

      small.innerText = message;

      formControl.className = "form-control error";
}

//show success for current input
function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
}

// test if email is valid
function isEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
}

// submits the form
function submit() {
      const blur = document.querySelector(".blur");
      blur.style.display = "flex";
      blur.getElementsByTagName("h2")[0].innerHTML = email.value + " está registrado por 7 dias de teste grátis. Nós vamos enviar para você uma notificação por email!";

}

