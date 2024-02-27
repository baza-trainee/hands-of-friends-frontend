export const useCurrentLang = () => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("i18nextLng");
    if ("ua" === storedData) {
      return "uk";
    } else {
      return "en";
    }
  }
};
