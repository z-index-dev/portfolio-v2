import createCache from "@emotion/cache";

const createEmotionCache = () => {
  return createCache({ key: "css" });
};

export const emotionCache = createEmotionCache();
