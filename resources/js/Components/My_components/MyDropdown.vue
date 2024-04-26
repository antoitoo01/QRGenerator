<script setup>
import { ref } from 'vue';


const props = defineProps(['buttonText', 'defaultState']);
const buttonText = props.buttonText;
const isOpen = ref(props.defaultState);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="rounded-lg min-w-24 w-[35rem] max-w-[40rem]">
        <button type="button" :class="{ 'custom-button shadow-slate-800 shadow-md': true, 'hover:motion-safe:animate-bounce': !isOpen }"
            @click="toggleDropdown">
            <p>{{ buttonText.toUpperCase() }}</p>
            <img src="../../../media/img/downArrow.png"
                class="flex size-5 filter invert ml-auto hover:animate-spin duration-200" alt="Flecha">
        
            </button>

        <div :class="{ 'dropdown-content': true, 'active': isOpen }">
            <div class="block px-4 py-2">
                <!-- Aquí puedes colocar el contenido específico del dropdown -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.dropdown-content {
    @apply transition-opacity duration-500 overflow-hidden opacity-0 max-h-0 transform origin-top;
}

.active {
    @apply opacity-100 max-h-screen -mt-1 py-2 z-0 bg-white rounded-b-md shadow-md shadow-slate-800;
    transform: scaleY(1);
}
</style>
