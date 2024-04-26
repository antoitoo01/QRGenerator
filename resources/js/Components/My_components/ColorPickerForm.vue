<template>
    <div id="countColorsSelector" class="flex flex-row w-fit overflow-auto px-2">
        <fieldset @change="updateColorCount" class="flex">
            <div class="input-group">
                <label for="oneColor" class="custom-label">{{ props.texto1 || 'Un Color' }}</label>
                <input type="radio" id="oneColor" name="colorCount" value="1" class="radio-input" checked>
            </div>
            <div class="input-group">
                <label for="twoColors" class="custom-label">{{ props.texto2 || 'Dos colores' }}</label>
                <input type="radio" id="twoColors" name="colorCount" value="2" class="radio-input">
            </div>
        </fieldset>
    </div>
    <div>
        <slot />
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    colorCount: Number,
    texto1: String,
    texto2: String
});

const emits = defineEmits(['update:colorCount']);

const updateColorCount = (event) => {
    emits('update:colorCount', parseInt(event.target.value));
};
</script>

<style scoped>
.custom-label {
    @apply px-2
}

.input-group {
    @apply flex place-items-center
}

.radio-input {
    @apply text-orange-500
}
</style>
