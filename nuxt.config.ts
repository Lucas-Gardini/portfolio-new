// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	css: ["animate.css", "vue3-lottie/dist/style.css", "@/assets/css/tailwind.css", "@/assets/css/main.scss"],
	modules: ["@nuxtjs/tailwindcss"]
});
