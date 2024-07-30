import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "pwa-template",
    "short_name": "pwa",
    "description": "NextJs app directory pwa-template ",
    "theme_color": "#4a90e2",
    "background_color": "#4a4a4a",
    "display": "fullscreen",
    "orientation": "portrait",
    "scope": "/",
    "start_url": "/",
    "icons": [
      {
        "src": "icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "icons/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      },
      {
        "src": "maskable.png",
        "sizes": "512x512",
        "type": "image/x-icon",
        "purpose": "maskable"
      }
    ]
  }
  
}
