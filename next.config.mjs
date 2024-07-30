/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
import cache from "./cache.js";

export default withPWA({
  // config
  dest: "public",
  //  skipWaiting: true,
  runtimeCaching: cache,
  sw: "service-worker.js",
  customWorkerDir: "custom-worker",
  cacheOnFrontEndNav: true, // Prevents showing error pages when a reload is done offline
  //   fallbacks: {
  //     audio: "",
  //     video: "",
  //     image: "",
  //     font: "",
  //     document: "", // defaults to /_offline
  //   }
});
