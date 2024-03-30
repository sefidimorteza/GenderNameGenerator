<template>
  <div class="option-container">
    <h4>{{ option.title }}</h4>
    <div class="option-buttons">
      <button v-for="(value, index) in option.buttons" :class="['option', computeBtnClasses(value, index)]"
        @click="chenge(value)">
        {{ value }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Gender, Length, Populariy } from '~/Enums/enum';

interface OptionProps {
  option: {
    title: string;
    category: string;
    buttons: Gender[] | Populariy[] | Length[];

  };
  options: {
    gender: Gender;
    popularity: Populariy;
    length: Length;
  };
}
const props = defineProps<OptionProps>();
const computeBtnClasses = (value: string, index: number) => {
  const classNames = [];
  if (props.options[props.option.category] === value) {
    classNames.push("option-active")
  }
  if (index === 0) {
    classNames.push("option-left")
  }
  if (index === props.option.buttons.length - 1)
    classNames.push("option-right");
  return classNames.join(" ");
}

const chenge = (value: string) => {
  props.options[props.option.category] = value
}
</script>

<style scoped>
.option-container {
  margin-bottom: 2rem;
}

.option {
  background: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(7, 60, 138);
  font-weight: 200;
  cursor: pointer;

}

.option-right {
  border-radius: 0 1rem 1rem 0;
}

.option-left {
  border-radius: 1rem 0 0 1rem;
}

.option-active {
  background-color: rgb(249, 87, 89);
  color: white;
}
</style>