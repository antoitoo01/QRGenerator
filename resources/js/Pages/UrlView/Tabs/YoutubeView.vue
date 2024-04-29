<script setup>
import { ref, watch, computed, defineProps } from "vue";
import ColorPicker from "../../../Components/My_components/MyColorPicker.vue";
import ColorPickerForm from "../../../Components/My_components/ColorPickerForm.vue";

import DesignPicker from "../../../Components/My_components/DesignPicker.vue";
import LogoPicker from "../../../Components/My_components/LogoPicker.vue";
import DropdownButton from "../../../Components/My_components/MyDropdown.vue";
import QRCodeGenerator from "../../../Components/My_components/QRCodeGenerator.vue";

const props = defineProps(["logos", "dotsTypes", "eyesTypes", "eyeFrameTypes"]);

//Booleans:
const FirstButtonIsOpen = ref(true);
const SecondButtonIsOpen = ref(false);
const ThirdButtonIsOpen = ref(false);
const FourthButtonIsOpen = ref(false);
const eyesIsChecked = ref(false);
const transparentBgIsChecked = ref(true);

//Títulos botones:
const textButtonText = "INTRODUCE CONTENIDO";
const colorsButtonText = "ESCOGE COLORES";
const logoButtonText = "AÑADIR LOGO";
const designButtonText = "PERSONALIZAR DISEÑO";

//Variables para el QR ----------------------------------------------------
const textValue = ref("");
const urlValueIsURL = ref(false);

//Colores del QR:
const colorCount = ref(1);
const colorsValue1 = ref("#000000");
const eyeColorsValue1 = ref("#000000");
const eyeColorsValue2 = ref("#000000");
const colorsArray = ref([colorsValue1.value]);
const eyeColorsArray = ref([eyeColorsValue1.value, eyeColorsValue2.value]);
const backgroundColor = ref(["#FFFFFF00"]);

const logoValue = ref(null);

//Partes del QR:
const selectedDotsType = ref("square");
const selectedEyeType = ref("square");
const selectedEyeFrameType = ref("square");

// Definir los nombres de los botones
const buttonName = ref("Descargar QR");
const downloadButton = ref("Descargar QR");
//FIN Variables para el QR -------------------------------------------------

// Función para verificar si la cadena es correcta
const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

watch(textValue, (value) => {
  if (textValue.value && textValue.value.length > 0) {
    if (isValidURL(value)) {
      urlValueIsURL.value = true;
    } else {
      urlValueIsURL.value = false;
    }
  }
});

watch(eyesIsChecked, (isChecked) => {
  if (!isChecked) {
    eyeColorsValue1.value = "#000000";
    eyeColorsValue2.value = "#000000";
    eyeColorsArray.value = [eyeColorsValue1.value, eyeColorsValue2.value];
  }
});

watch(transparentBgIsChecked, (isChecked) => {
  const alphaValue = isChecked ? "00" : "FF";
  const hasAlpha = backgroundColor.value[0].length === 9;

  if (isChecked && !hasAlpha) {
    backgroundColor.value[0] += alphaValue;
  } else if (!isChecked && hasAlpha) {
    backgroundColor.value[0] = backgroundColor.value[0].slice(0, -2);
  }
});

watch(colorCount, (newVal) => {
  colorCount.value = newVal;

  if (newVal < 2) {
    colorsArray.value[1] = "#000000";
  }
});

const handleColorCountUpdate = (newCount) => {
  colorCount.value = newCount;
};

const handleColorUpdate = (updatedColors) => {
  colorsArray.value = updatedColors;
};
const handleBgColorUpdate = (updatedColor) => {
  if (!transparentBgIsChecked.value) {
    backgroundColor.value = updatedColor;
  } else {
    transparentBgIsChecked.value = false;
  }
};

const handleEyeColorUpdate = (updatedColors) => {
  eyeColorsArray.value = updatedColors;
};

const handleLogoSelected = (logo) => {
  logoValue.value = logo;
};

const handleDotsTypeSelected = (type) => {
  selectedDotsType.value = type.value;
};

const handleEyeTypeSelected = (type) => {
  selectedEyeType.value = type.value;
};

const handleEyeFrameTypeSelected = (type) => {
  selectedEyeFrameType.value = type.value;
};
</script>

<template>
  <form class="flex flex-row">
    <!-- Parte izquierda de la página -->
    <div name="MainContainer" class="flex flex-col size-full pr-2">
      <!-- DropDown URL-->
      <div name="FirstButton">
        <DropdownButton
          :buttonText="textButtonText"
          :defaultState="FirstButtonIsOpen"
        >
          <div>
            <p class="pb-2"><b>Youtube URL</b></p>
            <input
              v-model="textValue"
              type="text"
              class="custom-input"
              placeholder="https://youtube.com"
            />
          </div>
        </DropdownButton>
      </div>
      <div name="Separator" class="py-2" />
      <!-- DropDown Colores -->
      <div name="SecondButton">
        <DropdownButton
          :buttonText="colorsButtonText"
          :defaultState="SecondButtonIsOpen"
        >
          <p class="pb-2"><b>¿Cuántos colores?</b></p>
          <div class="flex flex-row place-content-start overflow-auto">
            <div class="flex flex-col pr-14">
              <ColorPickerForm
                :colorCount="colorCount"
                :texto1="'Un color'"
                :texto2="'Dos colores'"
                @update:colorCount="handleColorCountUpdate"
              >
                <br />
                <ColorPicker
                  :colors="colorsArray"
                  :colorCount="colorCount"
                  @update:colors="handleColorUpdate"
                />
              </ColorPickerForm>
              <br />
              <p class="pb-2"><b>Color del fondo</b></p>
              <ColorPicker
                :colors="[backgroundColor]"
                @update:colors="handleBgColorUpdate"
              />

              <div
                class="flex flex-row place-content-center place-items-center justify-center"
              >
                <label for="transparent" class="mr-2">Fondo transparente</label
                ><br />
                <input
                  type="checkbox"
                  v-model="transparentBgIsChecked"
                  id="transparent"
                  name="transparent"
                  class="text-orange-500"
                  checked
                />
              </div>
            </div>
            <div class="flex flex-col place-items-center">
              <div class="flex place-items-center">
                <input
                  id="eyesIsCheck"
                  class="mr-2 text-orange-500"
                  type="checkbox"
                  v-model="eyesIsChecked"
                />
                <label for="eyesIsCheck">Color de ojo personalizado</label>
              </div>
              <br />
              <div
                v-if="eyesIsChecked"
                class="flex flex-row place-items-center"
              >
                <ColorPicker
                  class="flex flex-col"
                  :colors="eyeColorsArray"
                  @update:colors="handleEyeColorUpdate"
                />
                <div class="flex flex-col">
                  <p class="px-2 pb-4 text-slate-500">Exterior</p>
                  <p class="px-2 pt-2 text-slate-500">Interior</p>
                </div>
              </div>
            </div>
          </div>
        </DropdownButton>
      </div>
      <div name="Separator" class="py-2" />

      <!-- DropDown Logo -->
      <div name="ThirdButton">
        <DropdownButton
          :buttonText="logoButtonText"
          :defaultState="ThirdButtonIsOpen"
        >
          <LogoPicker
            :selectedLogo="logoValue"
            :logosList="props.logos"
            @logo-selected="handleLogoSelected"
            class="pt-2"
          />
        </DropdownButton>
      </div>
      <div name="Separator" class="py-2" />

      <!-- DropDown Personalizar-->
      <div name="FourthButton">
        <DropdownButton
          :buttonText="designButtonText"
          :defaultState="FourthButtonIsOpen"
        >
          <DesignPicker
            :dotsTypesList="props.dotsTypes"
            :eyesTypesList="props.eyesTypes"
            :eyeFrameTypes="props.eyeFrameTypes"
            @dotType-selected="handleDotsTypeSelected"
            @eyeType-selected="handleEyeTypeSelected"
            @eyeFrameType-selected="handleEyeFrameTypeSelected"
          />
        </DropdownButton>
        <br />
      </div>
    </div>

    <!-- Parte derecha de la página -->
    <div class="flex pl-2 w-full h-full">
      <div class="fixed pr-20">
        <div
          class="flex flex-col min-w-24 min-h-56 h-fit w-fit py-4 px-6 items-center justify-start place-content-center rounded-lg bg-orange-500 shadow-slate-800 shadow-md"
        >
          <QRCodeGenerator
            v-if="urlValueIsURL"
            :userUrl="textValue"
            :ButtonName="buttonName"
            :downloadButton="downloadButton"
            :colorsValue1="colorsArray[0]"
            :colorsValue2="colorsArray[1] || '#000000'"
            :cornersSquareColor="eyeColorsArray[0] || '#000000'"
            :selectedLogo="logoValue"
            :cornersDotColor="eyeColorsArray[1] || '#000000'"
            :backgroundColor="backgroundColor[0] || '#FFFFFF'"
            :dotsType="selectedDotsType || 'dot'"
            :eyeType="selectedEyeType || 'dot'"
            :eyeFrameType="selectedEyeFrameType || 'dot'"
          />
          <div
            v-else
            class="flex place-content-center place-items-center justify-center border-2 rounded-lg border-zinc-100 border-dotted min-size-24 size-40"
          >
            <p class="text-center text-zinc-100">Aquí va tu QR</p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.radio-input {
  @apply text-orange-500;
}

.custom-label {
  @apply px-2;
}
</style>