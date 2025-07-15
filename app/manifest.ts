import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Peace Nwankpa - iGaming, Crypto & Esports Writer",
    short_name: "Peace Nwankpa",
    description:
      "I craft high-impact content that simplifies blockchain, energizes gaming communities, and builds brand credibility.",
    start_url: "/",
    display: "standalone",
    background_color: "#EDEBF5",
    theme_color: "#3D52A0",
    icons: [
      {
        src: "/logo.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
