<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['selectedLogo', 'logosList']);
// Variable para almacenar la imagen seleccionada
const selectedLogo = ref(props.selectedLogo);
const logosList = ref(props.logosList);

const emit = defineEmits(['logo-selected']);

// Método para seleccionar una imagen de logo
const selectLogo = (logo) => {
    // Actualiza la variable selectedLogo con la ruta de la imagen seleccionada
    selectedLogo.value = logo;
    emit('logo-selected', logo);
};

</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-row">
            <div
                class="flex place-content-center place-items-center justify-center size-36 bg-orange-100 shadow-sm shadow-orange-950">
                <img v-if="selectedLogo" :src="selectedLogo" alt="Selected Logo" class="size-32" />
                <div v-else
                    class="flex flex-col size-32  place-content-center place-items-center justify-center border-dotted border-2 p-4 border-slate-900">
                    <p class="flex place-content-center place-items-center justify-center size-32 text-center ">Inserta
                        tu logo</p>
                </div>
            </div>
            <div class="flex flex-col ml-4">
                <label for="userLogo"
                    class="p-2 rounded-lg bg-orange-500 font-bold text-zinc-100 hover:scale-105">Cargar logo</label>
                <input type="file" id="userLogo" class="hidden" @change="handleFileChange" />
                <button type="button"
                    class="p-2 mt-2.5 rounded-lg bg-orange-100 font-bold text-slate-900 hover:scale-105"
                    @click="selectLogo(null)">Quitar logo</button>
            </div>
        </div>
        <br>
        <ul class="flex flex-row flex-wrap place-content-center">
            <li v-for="logo in logosList" :key="logo.name">
                <img :src="logo.path" :alt="logo.name" class="size-10 mx-2 hover:scale-110 hover:-translate-y-3"
                    @click="selectLogo(logo.path)" />
            </li>
        </ul>
    </div>
</template>
