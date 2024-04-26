<script setup>
/* Documentación: https://leafletjs.com/reference.html#map-factory */
import "leaflet/dist/leaflet.css"; // Importa los estilos de Leaflet
import L from "leaflet"; // Importa la biblioteca Leaflet
import { ref, onMounted, defineProps, defineEmits } from "vue"; // Importa el gancho de ciclo de vida de Vue

const props = defineProps({
  lat: {
    type: Number,
    default: 0,
  },
  lon: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["update:lat", "update:lon"]);

const latitude = ref(props.lat || 0);
const longitude = ref(props.lon || 0);

onMounted(() => {
  //Icono marcador
  var orangeIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  //Creación de mapa
  const map = L.map("map").setView([latitude.value, longitude.value], 0.5);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  //Cuando el mapa esté ready
  map.whenReady(() => {
    let marker = null;

    function onMapClick(e) {
      const { lat, lng } = e.latlng;
      if (marker) {
        marker.remove();
      }
      latitude.value = lat;
      longitude.value = lng;

      marker = L.marker([lat, lng], { icon: orangeIcon }).addTo(map);
      marker._icon.classList.add("huechange");
      emits("update:lat", lat);
      emits("update:lon", lng);
    }

    map.on("click", onMapClick);
  });
});
</script>


<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>

<style scoped>
.map {
  @apply h-56;
}
</style>