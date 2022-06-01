<template>
    <div>
        <Titulo />
        <Subtitulo />
        <Pagina1 />
    </div>
</template>

<script>
import Titulo from '../components/header/Titulo.vue'
import Subtitulo from '../components/header/Subtitulo.vue'
import Pagina1 from '../components/paginas/Pagina1.vue'


export default {
    name: 'Profissional',
    components: {
        Titulo,
        Subtitulo,
        Pagina1
    }
}
</script>
