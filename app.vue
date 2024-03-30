<template>
  <div class="container">
    <h1>Baby Name Genarator</h1>
    <p>Chose Your Option and click the "Find Names" button below </p>
    <div class="options-container">
      <Optionsvue v-for="option in optionArray" :key="option.title" :option="option" :options="options" />
      <button class="primary" @click="find">Find</button>
    </div>
    <div class="card-container">
      <CardName v-for="(item, index) in selectedNames" :key="item" :name="item" @remove="() => removename(index)"
        :index="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { optionState } from '@/modules/option';
import { Gender, Length, Populariy } from './Enums/enum';
import { names } from "@/Data/data";
import Optionsvue from './components/OptionsView.vue';
const options = reactive<optionState>({
  gender: Gender.BOY,
  populariy: Populariy.TRENDY,
  length: Length.ALL,
})
const optionArray = [
  {
    title: "1) chose a gender",
    category: "gender",
    buttons: [Gender.BOY, Gender.GIRL, Gender.UNISEX]
  },
  {
    title: "2) chose the name`s populariy",
    category: "populariy",
    buttons: [Populariy.TRENDY, Populariy.UNIQUE]
  },
  {
    title: "3) chose the name`s length",
    category: "length",
    buttons: [Length.SHORT, Length.ALL, Length.LONG]
  },
]

const selectedNames = ref<string[]>([])
const find = () => {
  const filter = names.filter((n) => n.gender === options.gender).filter((n) => {
    if (Length.ALL === options.length) {
      return true
    }
    else {
      return n.length === options.length
    }
  }).filter((n) => n.populariy === options.populariy);

  selectedNames.value = filter.map((name) => name.name)
}
const removename = (index: number) => {
  const removeitems = [...selectedNames.value]
  removeitems.splice(index, 1)
  selectedNames.value = removeitems 
}
</script>
<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  widows: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: .75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.card-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}
</style>