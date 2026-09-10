# Image credits

This project uses two verified real photographs from Wikimedia Commons. Because the build environment could not fetch remote binary assets, these two photographs remain remote URLs in `src/pages/index.astro` rather than being copied into `public/`.

- `Freedom_Square,_Tbilisi.jpg` — author: anjči / ANJCI ALL OVER — CC BY 2.0  
  Source: https://commons.wikimedia.org/wiki/File:Freedom_Square,_Tbilisi.jpg
  Direct original: https://upload.wikimedia.org/wikipedia/commons/4/40/Freedom_Square%2C_Tbilisi.jpg

- `Freedom_Square_at_night,_Tbilisi,_Georgia.jpg` — author: CivArmy — CC BY 4.0  
  Source: https://commons.wikimedia.org/wiki/File:Freedom_Square_at_night,_Tbilisi,_Georgia.jpg
  Direct original: https://upload.wikimedia.org/wikipedia/commons/8/86/Freedom_Square_at_night%2C_Tbilisi%2C_Georgia.jpg

For a fully self-contained deployment, download the original files above into `public/images/` and replace the two constants `heroImage` and `nightImage` with local paths.
