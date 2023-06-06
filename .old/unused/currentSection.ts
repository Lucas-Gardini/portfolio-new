export const useCurrentSection = () => {
	return useState("current", () => 0);
};
