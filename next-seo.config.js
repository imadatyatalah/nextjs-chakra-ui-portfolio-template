import { seo } from "config"

export default {
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.canonical,
    site_name: seo.title,
  },
}
