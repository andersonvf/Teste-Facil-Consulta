<template>
    <div>
        <Titulo />
        <Subtitulo />
        <Pagina4 />
    </div>
</template>

<script>
import Titulo from '../components/header/Titulo.vue'
import Subtitulo from '../components/header/Subtitulo.vue'
import Pagina4 from '../components/paginas/Pagina4.vue'


export default {
    name: 'Finalizar',
    components: {
        Titulo,
        Subtitulo,
        Pagina4
    }
}
</script>
