import { getCollection } from "astro:content";

export const getStaticPaths = async () => {
  const pages = await getCollection("about");

  return pages.map((page) => ({
    params: {
      lang: page.data.lang,
    },
  }));
};
