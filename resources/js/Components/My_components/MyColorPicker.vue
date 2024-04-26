<template>
    <div id="colorPicker">
        <div v-for="(color, index) in colors" :key="index" class="flex place-content-center place-items-center">
            <input type="color" :value="color" class="h-12" @input="updateColor(index, $event.target.value)">
            <input type="text" :value="color" class="custom-input h-10 min-w-[5.5rem] max-w-28"
                @input="updateColor(index, $event.target.value)">
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
    colors: Array,
    colorCount: Number
});

const colors = ref(props.colors || ['#000000FF']);

const emits = defineEmits(['update:colors']);

const updateColor = (index, color) => {
    colors.value[index] = color;
    emitColorUpdate(color, index);
};

const emitColorUpdate = (color, index) => {
    emits('update:colors', colors.value);
};

watch(() => props.colorCount, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        // Actualiza la cantidad de colores según el nuevo valor
        const newColors = [...colors.value];
        if (newVal > newColors.length) {
            // Agrega nuevos colores si es necesario
            for (let i = newColors.length; i < newVal; i++) {
                newColors.push('#000000');
                emitColorUpdate('#000000', i);
            }
        } else if (newVal < newColors.length) {
            // Elimina colores extra
            newColors.splice(newVal);
        }
        colors.value = newColors;
    }
});

</script>