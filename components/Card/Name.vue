<template>
    <div class="card">
        <h4>{{ name }}</h4>
        <p @click="removeName">x</p>
    </div>
</template>

<script setup lang="ts">

interface NameProps {
    name: string,
    index: number
}
const props = defineProps<NameProps>();
const emits = defineEmits(["remove"])
const removeName = () => {
    emits("remove", props.index)
}
</script>

<style scoped>
.card {
    background-color: rgb(27, 60, 138);
    width: 28%;
    color: white;
    border-radius: 1rem;
    padding: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
}

.card p {
    position: absolute;
    top: -10%;
    left: 92.5%;
    cursor: pointer;
    color: rgb(255, 255, 255, 0.178);
}
</style>