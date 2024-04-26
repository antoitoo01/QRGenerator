<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["dotsTypesList", "eyesTypesList", "eyeFrameTypes"]);
// Variable para almacenar la imagen seleccionada
const selectedDotType = ref(null);
const selectedEyeType = ref(null);
const selectedEyeFrameType = ref(null);

const emit = defineEmits([
  "dotType-selected",
  "eyeType-selected",
  "eyeFrameType-selected",
]);

const selectDotType = (dotType) => {
  selectedDotType.value = dotType.name;
  emit("dotType-selected", selectedDotType);
};

const selectEyeType = (eyeType) => {
  selectedEyeType.value = eyeType.name;
  emit("eyeType-selected", selectedEyeType);
};
const selectEyeFrameType = (eyeFrameType) => {
  selectedEyeFrameType.value = eyeFrameType.name;
  emit("eyeFrameType-selected", selectedEyeFrameType);
};
</script>

<template>
  <section class="flex flex-col">
    <!-- QR Body -->
    <p><b>Cuerpo del QR</b></p>
    <br />
    <div class="list-container">
      <div v-for="dotType in props.dotsTypesList" :key="dotType.name">
        <div class="img-container">
          <img
            :src="dotType.path"
            :alt="dotType.name"
            class="img"
            @click="selectDotType(dotType)"
          />
        </div>
      </div>
    </div>
    <!-- Eye -->
    <br />
    <p><b>Forma del ojo</b></p>
    <br />
    <div class="list-container">
      <div v-for="eyeType in props.eyesTypesList" :key="eyeType.name">
        <div class="img-container">
          <img
            :src="eyeType.path"
            :alt="eyeType.name"
            class="img"
            @click="selectEyeType(eyeType)"
          />
        </div>
      </div>
    </div>
    <!-- Eye Frame -->
    <br />
    <p><b>Forma del marco del ojo</b></p>
    <br />
    <div class="list-container">
      <div v-for="eyeFrameType in props.eyeFrameTypes" :key="eyeFrameType.name">
        <div class="img-container">
          <img
            :src="eyeFrameType.path"
            :alt="eyeFrameType.name"
            class="img"
            @click="selectEyeFrameType(eyeFrameType)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-container {
  @apply flex flex-row flex-wrap gap-5;
}
.img-container {
  @apply flex size-12 place-content-center rounded-xl shadow-lg hover:scale-110 hover:-translate-y-3 hover:shadow-orange-300;
}

.img {
  @apply size-10 mx-2;
}
</style>