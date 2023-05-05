const messages = {
	"pt-BR": {
		travelingTo: "Viajando para",
		devRole: "Dev Full Stack",
	},
	en: {
		travelingTo: "Traveling to",
		devRole: "Full Stack Developer",
	},
};

export default defineI18nConfig((nuxt) => ({
	legacy: false,
	messages: {
		...messages,
		"en-US": messages.en,
	},
}));
