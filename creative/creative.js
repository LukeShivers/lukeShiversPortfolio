import { rootFontSize } from "../scripts/index.js";

// 55 imgs, 18 are horizontal

const gallery = document.querySelector(".gallery");

for (let i = 0; i < 17; i++) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imageContainer");
  imgContainer.id = `rrgContainer${i}`;
  const img = document.createElement("img");
  imgContainer.appendChild(img);
  img.classList.add("image");
  img.src = `../assets/rrg/rrg${i}.jpg`;
  img.alt = "image";
  gallery.appendChild(imgContainer);
}
