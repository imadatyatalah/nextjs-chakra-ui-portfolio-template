import { seo } from "config";

export default {
  titleTemplate: `%s | ${seo.title}`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.canonical,
    site_name: seo.title,
  },
};
