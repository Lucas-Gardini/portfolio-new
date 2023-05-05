import LottieVue from "vue3-lottie";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(LottieVue, { name: "lottie" });
});
