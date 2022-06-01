<template>
    <button
        type="submit"
        class="btn btn-primary bg-primary mt-3"
    >{{mensagem}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    mensagem: String,
  },
};
</script>

<style>
.btn {
    border: none;
  border-radius: 15px;
}
</style>
