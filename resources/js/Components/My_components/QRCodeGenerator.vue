<script setup>
import QRCodeVue3 from "qrcode-vue3";
import html2canvas from "html2canvas";
import { ref, watch, defineProps } from "vue";

const txtPorDefecto = "Por defecto";

// Definir props directamente dentro de defineProps
const props = defineProps({
  userUrl: String,
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: 200,
  },
  margin: Number,
  imgclass: String,
  myclass: String,
  downloadButton: String,
  ButtonName: String,
  qrOptions: Object,
  imageOptions: Object,
  dotsOptions: Object,
  backgroundOptions: Object,
  cornersSquareOptions: Object,
  cornersDotOptions: Object,
  fileExt: String,
  image: String,
  download: Boolean,
  downloadOptions: Object,
  colorsValue1: String,
  colorsValue2: String,
  backgroundColor: String,
  cornersDotColor: String,
  cornersSquareColor: String,
  selectedLogo: String,
  dotsType: String,
  eyeType: String,
  eyeFrameType: String,
});

//Así generaremos la reactividad que necesitamos:
const userUrl = ref(props.userUrl || txtPorDefecto);

// Observar cambios en los props
watch(
  () => props.userUrl,
  (newValue) => {
    userUrl.value = newValue;
    if (!userUrl.value) {
      userUrl.value = txtPorDefecto;
    }
  }
);

//Función para descargar el QR
function downloadQR() {
  var qrDiv = document.getElementById("qrCanvas");

  // Obtiene la fecha y hora actual como un timestamp
  var timestamp = new Date().getTime();
  var nombreArchivo = "your_qr_" + timestamp + ".png";

  // Usa html2canvas para convertir el contenido del div en un lienzo
  html2canvas(qrDiv).then(function (canvas) {
    // Crea un elemento <a> para descargar la imagen
    var link = document.createElement("a");
    // Establece el atributo href con los datos de la imagen en formato base64
    link.href = canvas.toDataURL();
    // Establece el nombre del archivo
    link.download = nombreArchivo;
    link.click();
  });
}
</script>

<template>
  <div
    class="flex flex-col w-full h-[80%] place-content-center justify-center place-items-center"
  >
    <div id="qrCanvas">
      <QRCodeVue3
        :width="400"
        :height="400"
        :value="userUrl"
        :key="[userUrl]"
        :qrOptions="{
          typeNumber: 0,
          mode: 'Byte',
          errorCorrectionLevel: 'H',
        }"
        :image="props.selectedLogo"
        :imageOptions="{
          hideBackgroundDots: true,
          imageSize: 0.4,
          margin: 0,
        }"
        :dotsOptions="{
          type: props.dotsType,
          color: props.colorsValue1,
          gradient: {
            type: 'linear',
            rotation: 0,
            colorStops: [
              { offset: 0, color: props.colorsValue1 },
              { offset: 1, color: props.colorsValue2 },
            ],
          },
        }"
        :backgroundOptions="{ color: props.backgroundColor }"
        :cornersSquareOptions="{
          type: props.eyeFrameType,
          color: props.cornersSquareColor || '#000000',
        }"
        :cornersDotOptions="{
          type: props.eyeType,
          color: props.cornersDotColor || '#000000',
        }"
        :fileExt="'png'"
        :download="false"
        :myclass="'my-qur'"
        :imgclass="'img-qr'"
        :downloadOptions="{ name: 'vqr', extension: 'png' }"
      />
    </div>
    <br />
    <div class="h-[20%]">
      <button
        type="button"
        @click="downloadQR"
        id="my-button"
        name="my-button"
        class="rounded-lg border-solid px-2 bg-zinc-700 hover:shadow-md hover:shadow-orange-300 hover:scale-110"
      >
        <p class="text-zinc-100 font-bold">Descargar QR</p>
      </button>
    </div>
  </div>
</template>
