<template>
    <div class="center-screen">
        <div class="container-fluid">
            <h2 class="titulo">{{ Titulo }}</h2>
            <div class="row">
                <div style="margin: 5% 0px 0px 10%;">
                    <div class="form-group">
                        <img src="../../assets/imagens/img5.png" style="width:400px;height:230px;" class="rounded">
                    </div>

                </div>
                <img src="../../assets/imagens/img4.png" style="width:400px;height:300px;" class="rounded">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Pagina4',
    data() {
        return {
            Titulo: 'Cadastro Concluído!'
        }
    },

}


</script>

<style scoped>
.container-fluid {
    background-color: #fff;
    height: 650px;
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

.resultadoTitulo {
    font-weight: bold;
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

.buttonCadastro {
    margin-bottom: 30px;
    border-radius: 15px;
    width: 400px;
    margin-top: 15px;
    text-align: center;
    background-color: #FBDE40;
    color: #000;
    font-family: 'Comfortaa', cursive;
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
    /* Firefox */
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


    img {
        display: none;
    }

    .buttonCadastro {
        display: auto;
        border-radius: 30px;
        white-space: nowrap;
        width: 300px;
        margin-top: 10px;
        text-align: center;

    }
}
</style>

