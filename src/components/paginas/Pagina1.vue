<template>
  <div class="center-screen">
    <div class="container-fluid">
      <h2 class="titulo">{{ Titulo }}</h2>
      <h5 class="subTitulo">{{ Subtitulo }}</h5>
      <div class="row">

        <form action="/atendimento" style="margin: 5% 0px 0px 5%;">
          <div class="form-group">
            <label class="tituloInput" for="name">Nome Completo*</label>
            <input type="text" required class="form-control inputName" id="name" name="name" aria-describedby="name"
              v-model="formValues.nome" minlength="3" maxlength="48" placeholder="Digite o nome completo">
          </div>
          <div class="form-group">
            <label class="tituloInput" for="cpf">CPF*</label>
            <input type="text" inputmode="numeric" required v-model="formValues.cpf" class="form-control inputNumber"
              maxlength="14" id="CPF" name="CPF" v-on:keypress="NumbersOnly" placeholder="Digite um CPF">

          </div>
          <div class="form-group">
            <label class="tituloInput" for="celular">Número de celular*</label>
            <input type="tel" inputmode="numeric" class="form-control inputNumber" maxlength="15" id="phone"
              name="phone" v-model="formValues.celular" required v-on:keypress="NumbersOnly"
              placeholder="(00)0 0000-0000">
          </div>
          <div class="row">
            <div class="col">
              <label class="tituloInput">Estado*</label>
              <select required v-model="formValues.estados" placeholder="Selecione" class="form-control inputSelect"
                name="select1" id="select1">
                <option disabled selected value="0">Selecione</option>
                <option value="Paraná">Paraná</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Santa Catarina">Santa Catarina</option>
              </select>
            </div>
            <div class="col">
              <label class="tituloInput">Cidade*</label>
              <select required v-model="formValues.cidades" placeholder="Selecione" class="form-control inputSelect"
                name="select2" id="select2">
                <option disabled selected value="0">Selecione</option>
                <option value="Londrina">Londrina</option>
                <option value="Maringá">Maringá</option>
                <option value="Pelotas">Pelotas</option>
                <option value="Porto Alegre">Porto Alegre</option>
                <option value="Florianópolis">Florianópolis</option>
                <option value="Joinville">Joinville</option>
              </select>
            </div>
          </div>

          <div class="row ">
            <div class="col-md-4">
              <div class="progress" style="height: 25px;margin-top:30px;">
                <div class="progress-bar" role="progressbar" style="width: 50%;background-color: rgb(72, 54, 152);"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <h6 class="contagem">1 de 2</h6>
            </div>
          </div>
          <button type="submit" @click="save_data()" class="btn">PRÓXIMO</button>
        </form>
        <img src="../../assets/imagens/img1.png" style="width:400px;height:400px;" class="rounded ">
      </div>
    </div>
  </div>

</template>

<script>

document.addEventListener('keydown', function (event) {
  if (event.keyCode != 46 && event.keyCode != 8) {
    var i = document.getElementById("CPF").value.length;
    if (i === 3 || i === 7)
      document.getElementById("CPF").value = document.getElementById("CPF").value + ".";
    else if (i === 11)
      document.getElementById("CPF").value = document.getElementById("CPF").value + "-";
  }
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode != 46 && event.keyCode != 8) {
    var i = document.getElementById("phone").value.length;
    if (i === 0)
      document.getElementById("phone").value = document.getElementById("phone").value + "(";
    if (i === 3)
      document.getElementById("phone").value = document.getElementById("phone").value + ")";
    if (i === 5)
      document.getElementById("phone").value = document.getElementById("phone").value + " ";
    else if (i === 10)
      document.getElementById("phone").value = document.getElementById("phone").value + "-";
  }
});

export default {
  name: 'Pagina1',
  data() {
    return {
      Titulo: 'Sobre o profissional',
      Subtitulo: 'Dados do profissional',
      formValues: {
        nome: '',
        cpf: '',
        estados: '',
        cidades: ''
      }
    }

  },
  methods: {
    NumbersOnly(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    },
    save_data() {
      var inputNome = document.getElementById("name");
      var inputCPF = document.getElementById("CPF");
      var inputNumero = document.getElementById("phone");
      var inputEstado = document.getElementById("select1");
      var inputCidade = document.getElementById("select2");

      localStorage.setItem("name", inputNome.value);
      localStorage.setItem("CPF", inputCPF.value);
      localStorage.setItem("phone", inputNumero.value);
      localStorage.setItem("select1", inputEstado.value);
      localStorage.setItem("select2", inputCidade.value);

    }

  }

}


</script>

<style scoped>
.container-fluid {
  background-color: #fff;
  height: auto;
  width: 900px;
  border-radius: 20px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
}

.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.tituloInput {
  max-width: 300px;
  min-width: 100px;
  display: flex;
}

.inputName {
  width: 400px;
}

.inputNumber {
  width: 300px;
}

.inputSelect {
  width: 200px;
}

input,
select {
  border-color: #483698;
}

input:focus,
select:focus {
  border-color: #483698;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(72, 54, 152, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(72, 54, 152, 0.6);
}

h6 {
  font-family: 'Comfortaa', cursive;
  color: #483698;
}

.formTotal {
  margin-left: 4%;
}

button {
  margin-bottom: 30px;
  border-radius: 15px;
  width: 400px;
  margin-top: 15px;
  text-align: center;
  background-color: rgb(72, 54, 152);
  color: #fff;
}

.progress {
  width: 300px;
}

.contagem {
  margin-top: 30px;
  font-size: 20px;
  margin-right: -300px;
}

@media (max-width: 600px) {
  .container-fluid {
    border-radius: 0px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    margin-top: 80px;
    max-width: 100%;
    height: 92vh;
    overflow-x: hidden;
  }

  .inputName {
    width: 90%;
  }

  .inputSelect {
    width: 150px;
  }

  .inputNumber {
    width: 70%;
  }

  img {
    display: none;
  }

  .progress {
    width: 250px;
  }

  .contagem {
    margin-top: -25px;
    font-size: 20px;
    margin-left: -60px;
  }

  button {
    display: auto;
    border-radius: 15px;
    margin-left: -20px;
    width: 98%;
    margin-top: 15px;
    text-align: center;
    background-color: rgb(72, 54, 152);
    color: #fff;
  }
}
</style>

