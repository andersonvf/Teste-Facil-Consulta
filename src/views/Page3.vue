<template>
    <div>
        <Titulo />
        <Subtitulo />
        <Pagina3 />
    </div>
</template>

<script>
import Titulo from '../components/header/Titulo.vue'
import Subtitulo from '../components/header/Subtitulo.vue'
import Pagina3 from '../components/paginas/Pagina3.vue'


export default {
    name: 'Finalizar',
    components: {
        Titulo,
        Subtitulo,
        Pagina3
    }
}
</script>
