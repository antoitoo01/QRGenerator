<script setup>
import { Link } from "@inertiajs/vue3";

//Obtener las rutas:
const routes = [
  { name: "URL", path: "/" },
  { name: "TEXT", path: "/text" },
  { name: "EMAIL", path: "/email" },
  { name: "PHONE", path: "/phone" },
  { name: "SMS", path: "/sms" },
  { name: "VCARD", path: "/vcard" },
  { name: "MECARD", path: "/mecard" },
  { name: "LOCALIZACIÓN", path: "/location" },
  { name: "FACEBOOK", path: "/facebook" },
  { name: "TWITTER", path: "/x" },
  { name: "YOUTUBE", path: "/youtube" },
  { name: "WIFI", path: "/wifi" },
  { name: "EVENTO", path: "/event" },
];
</script>

<template>
  <div class="flex flex-col min-h-screen size-full">
    <!-- Menú de navegación -->
    <header
      class="sticky top-0 z-50 h-30 shadow-md bg-gradient-to-tl from-orange-500 to-orange-700"
    >
      <a
        href="/"
        class="flex flex-row items-center ps-10 p-5 size-fit hover:invert"
      >
        <img
          src="../../media/img/codigo-qr.png"
          alt="Logo"
          class="inline-block mr-1 pb-0.5 size-6 filter brightness-10 invert"
        />
        <h1
          class="font-eczar font-bold text-zinc-50 text-2xl leading-12 inline-block"
        >
          QRGenerator
        </h1>
      </a>
      <div class="px-5 pt-4 pb-0">
        <ul class="scrollbar">
          <li v-for="(route, index) in routes" :key="index">
            <div class="inline-block group py-0 px-1 m-0">
              <!-- Texto con enlace-->
              <div class="hover:-translate-y-1">
                <Link
                  :href="route.path"
                  class="text-slate-100 group-hover:text-gray-950"
                >
                  <b>{{ route.name }}</b>
                </Link>
              </div>
              <!-- Línea decorativa inferior-->
              <div
                class="h-px w-full bg-slate-100 group-hover:bg-gray-950"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </header>

    <!-- Contenido principal -->
    <div
      class="py-4 px-2 pr-[16rem] bg-gradient-to-b from-slate-200 to-orange-100 min-h-screen flex justify-center place-items-start size-full min-w-fit"
    >
      <slot />
    </div>

    <!-- Footer -->
    <footer
      class="bottom-0 z-1 w-full bg-gradient-to-bl from-orange-500 to-orange-700 text-slate-100 py-4 px-5"
    >
      <p>QRGenerator&copy;</p>
    </footer>
  </div>
</template>




<style scoped>
/* Fuente del Logo*/
@import url("https://fonts.googleapis.com/css2?family=Eczar&display=swap");

.font-eczar {
  font-family: "Eczar", sans-serif;
}

.scrollbar {
  @apply list-none flex flex-row space-x-4 overflow-x-auto scroll-smooth flex-nowrap;
}

/* https://es.stackoverflow.com/a/514887 */
.scrollbar::-webkit-scrollbar {
  @apply w-[9px] h-[9px];
}

.scrollbar::-webkit-scrollbar-button {
  @apply w-[0px] h-[0px];
}
.scrollbar::-webkit-scrollbar-thumb {
  @apply bg-transparent border-0 border-none bg-zinc-50 rounded-[10px];
}
.scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-orange-100;
}
.scrollbar::-webkit-scrollbar-thumb:active {
  @apply bg-orange-300;
}
.scrollbar::-webkit-scrollbar-track {
  @apply bg-transparent border-0 border-none rounded-[5px];
}
.scrollbar::-webkit-scrollbar-track:hover {
  @apply bg-transparent;
}
.scrollbar::-webkit-scrollbar-track:active {
  @apply bg-transparent;
}
.scrollbar::-webkit-scrollbar-corner {
  @apply bg-transparent;
}
</style>