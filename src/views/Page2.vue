<template>
    <div>
        <Titulo />
        <Subtitulo />
        <Pagina2 />
    </div>
</template>

<script>
import Titulo from '../components/header/Titulo.vue'
import Subtitulo from '../components/header/Subtitulo.vue'
import Pagina2 from '../components/paginas/Pagina2.vue'


export default {
    name: 'Atendimento',
    components: {
        Titulo,
        Subtitulo,
        Pagina2
    }
}
</script>
