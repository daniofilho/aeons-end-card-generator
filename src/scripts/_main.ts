import { IImages } from "./types";

import templateInstagramSrc from '../assets/images/template-instagram.png';
import templateYouTubeSrc from '../assets/images/template-youtube.png';
import templateYouTubeShortsSrc from '../assets/images/template-youtube-shorts.png';

import swissBlackFontWoff from '../assets/fonts/Swiss721BT-Black.woff';
import swissNormalFontWoff from '../assets/fonts/Swiss721BT-Bold.woff';
import swissHeavyFontWoff from '../assets/fonts/Swiss721BT-Heavy.woff';

const fontSwissBlackWoff = new FontFace('Swiss Black', `url(${swissBlackFontWoff})`);
(document.fonts as any).add(fontSwissBlackWoff);

const fontSwissNormalWoff = new FontFace('Swiss Normal', `url(${swissNormalFontWoff})`);
(document.fonts as any).add(fontSwissNormalWoff);

const fontSwissHeavyWoff = new FontFace('Swiss Heavy', `url(${swissHeavyFontWoff})`);
(document.fonts as any).add(fontSwissHeavyWoff);


const guestDOM = document.getElementById('guest') as HTMLInputElement;
const descriptionDOM = document.getElementById('description') as HTMLInputElement;
const dateDOM = document.getElementById('date') as HTMLInputElement;
const editionDOM = document.getElementById('edition') as HTMLInputElement;

const avatarDOM = document.getElementById('avatar') as HTMLInputElement;
const miniature01DOM = document.getElementById('miniature-01') as HTMLInputElement;
const miniature02DOM = document.getElementById('miniature-02') as HTMLInputElement;
const miniature03DOM = document.getElementById('miniature-03') as HTMLInputElement;
const miniature04DOM = document.getElementById('miniature-04') as HTMLInputElement;

const buttonGeneratorDOM = document.getElementById('generate-thumbs') as HTMLButtonElement;

const canvasYouTube = document.getElementById('template-youtube') as HTMLCanvasElement;
canvasYouTube.width = 1920;
canvasYouTube.height = 1080;
const contextYouTube = canvasYouTube ? canvasYouTube.getContext('2d') : null;

const canvasInstagram = document.getElementById('template-instagram') as HTMLCanvasElement;
canvasInstagram.width = 1080;
canvasInstagram.height = 1080;
const contextInstagram = canvasInstagram ? canvasInstagram.getContext('2d') : null;

const canvasYouTubeShorts = document.getElementById('template-youtube-shorts') as HTMLCanvasElement;
canvasYouTubeShorts.width = 1080;
canvasYouTubeShorts.height = 1920;
const contextYouTubeShorts = canvasYouTubeShorts ? canvasYouTubeShorts.getContext('2d') : null;

const youTubeDownloadButtonDOM = document.getElementById('template-youtube-download') as HTMLAnchorElement;
const instagramDownloadButtonDOM = document.getElementById('template-instagram-download') as HTMLAnchorElement;
const YouTubeShortsDownloadButtonDOM = document.getElementById('template-youtube-shorts-download') as HTMLAnchorElement;

const canvasContainerDOM = document.getElementById('canvas-container') as HTMLDivElement;

const images: IImages = {
  templateInstagram: null,
  templateYouTube: null,
  templateYouTubeShorts: null,
  testAvatar: null,
  testMiniature: null,
  avatar: null,
  miniature01: null,
  miniature02: null,
  miniature03: null,
  miniature04: null,
};

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const generateThumbs = () => {
  if (!guestDOM || !descriptionDOM || !dateDOM || !editionDOM) return;
  if (!contextYouTube || !contextInstagram || !contextYouTubeShorts) return;
  if (!avatarDOM || !miniature01DOM || !miniature02DOM || !miniature03DOM || !miniature04DOM) return;
  if (!youTubeDownloadButtonDOM || !instagramDownloadButtonDOM || !YouTubeShortsDownloadButtonDOM) return;
  if (!images.templateInstagram || !images.templateYouTube || !images.templateYouTubeShorts) return;
  if (!canvasContainerDOM) return;


  // # Textos

  const guest = guestDOM.value;
  const description = descriptionDOM.value;
  const date = dateDOM.value;
  const edition = editionDOM.value;

  // # Arquivos



  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // * YouTube

  // Avatar
  if (images.avatar)
    contextYouTube.drawImage(images.avatar, 108, 123, 640, 880);

  // Miniatura 1
  if (images.miniature01)
    contextYouTube.drawImage(images.miniature01, 800, 663, 230, 250);

  // Miniatura 2
  if (images.miniature02)
    contextYouTube.drawImage(images.miniature02, 1047, 663, 230, 250);

  // Miniatura 3
  if (images.miniature03)
    contextYouTube.drawImage(images.miniature03, 1291, 663, 230, 250);

  // Miniatura 4
  if (images.miniature04)
    contextYouTube.drawImage(images.miniature04, 1533, 663, 230, 250);

  // Template
  contextYouTube.drawImage(images.templateYouTube, 0, 0, 1920, 1080);

  // Textos
  contextYouTube.fillStyle = '#FFFFFF';
  contextYouTube.textAlign = 'center';

  contextYouTube.font = "44px 'Swiss Heavy'";
  contextYouTube.fillText(`#${edition}`, 1295, 365);

  contextYouTube.font = "44px 'Swiss Heavy'";
  contextYouTube.fillText(date, 1580, 490);

  contextYouTube.font = "60px 'Swiss Black'";
  contextYouTube.fillText(guest.toUpperCase(), 1320, 575);

  contextYouTube.font = "30px 'Swiss Normal";
  contextYouTube.fillStyle = '#000000';
  contextYouTube.fillText(description.toUpperCase(), 1300, 620);


  // Download

  youTubeDownloadButtonDOM.href = canvasYouTube.toDataURL('image/jpeg');
  youTubeDownloadButtonDOM.download = `${guest} - Youtube`;


  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // * Instagram

  // Avatar
  if (images.avatar)
    contextInstagram.drawImage(images.avatar, 180, 340, 360, 480);

  // Miniatura 1
  if (images.miniature01)
    contextInstagram.drawImage(images.miniature01, 575, 375, 178, 195);

  // Miniatura 2
  if (images.miniature02)
    contextInstagram.drawImage(images.miniature02, 765, 375, 178, 195);

  // Miniatura 3
  if (images.miniature03)
    contextInstagram.drawImage(images.miniature03, 575, 590, 178, 195);

  // Miniatura 4
  if (images.miniature04)
    contextInstagram.drawImage(images.miniature04, 765, 590, 178, 195);

  // Template
  contextInstagram.drawImage(images.templateInstagram, 0, 0, 1080, 1080);

  // Textos
  contextInstagram.fillStyle = '#FFFFFF';
  contextInstagram.textAlign = 'center';

  contextInstagram.font = "40px 'Swiss Heavy'";
  contextInstagram.fillText(`#${edition}`, 495, 270);

  contextInstagram.font = "44px 'Swiss Heavy'";
  contextInstagram.fillText(date, 550, 1010);

  contextInstagram.font = "45px 'Swiss Black'";
  contextInstagram.fillText(guest.toUpperCase(), 540, 910);

  contextInstagram.font = "24px 'Swiss Normal";
  contextInstagram.fillStyle = '#000000';
  contextInstagram.fillText(description.toUpperCase(), 540, 940);

  // Download

  instagramDownloadButtonDOM.href = canvasInstagram.toDataURL('image/jpeg');
  instagramDownloadButtonDOM.download = `${guest} - Instagram`;

  // * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // * YouTube Shorts

  // Avatar
  if (images.avatar)
    contextYouTubeShorts.drawImage(images.avatar, 115, 485, 535, 735);

  // Miniatura 1
  if (images.miniature01)
    contextYouTubeShorts.drawImage(images.miniature01, 725, 530, 250, 270);

  // Miniatura 2
  if (images.miniature02)
    contextYouTubeShorts.drawImage(images.miniature02, 725, 855, 250, 270);

  // Template
  contextYouTubeShorts.drawImage(images.templateYouTubeShorts, 0, 0, 1080, 1920);

  // Textos
  contextYouTubeShorts.fillStyle = '#FFFFFF';
  contextYouTubeShorts.textAlign = 'center';

  contextYouTubeShorts.font = "44px 'Swiss Heavy'";
  contextYouTubeShorts.fillText(`#${edition}`, 490, 375);

  contextYouTubeShorts.font = "60px 'Swiss Heavy'";
  contextYouTubeShorts.fillText(date, 550, 1340);

  contextYouTubeShorts.font = "66px 'Swiss Black'";
  contextYouTubeShorts.fillText(guest.toUpperCase(), 540, 1425);

  contextYouTubeShorts.font = "32px 'Swiss Normal";
  contextYouTubeShorts.fillStyle = '#000000';
  contextYouTubeShorts.fillText(description.toUpperCase(), 540, 1475);


  // Download

  YouTubeShortsDownloadButtonDOM.href = canvasYouTubeShorts.toDataURL('image/jpeg');
  YouTubeShortsDownloadButtonDOM.download = `${guest} - YouTube Shorts`;

  canvasContainerDOM.style.display = "block";
}

// * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// # Templates

// YouTube
const templateYouTubeImage = new Image();
templateYouTubeImage.src = templateYouTubeSrc;
templateYouTubeImage.onload = () => {
  images.templateYouTube = templateYouTubeImage;
}

// YouTube Shorts
const templateYouTubeShortsImage = new Image();
templateYouTubeShortsImage.src = templateYouTubeShortsSrc;
templateYouTubeShortsImage.onload = () => {
  images.templateYouTubeShorts = templateYouTubeShortsImage;
}

// Instagram
const templateInstagramImage = new Image();
templateInstagramImage.src = templateInstagramSrc;
templateInstagramImage.onload = () => {
  images.templateInstagram = templateInstagramImage;
}



// # Avatar
avatarDOM.addEventListener('change', function () {
  if (!avatarDOM.files) return;

  const file = avatarDOM.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    if (!event.target) return;

    const img = new Image();
    img.onload = function () { images.avatar = img; }
    img.src = String(event.target.result);
  }
  reader.readAsDataURL(file);
});

// # Miniatura 01
miniature01DOM.addEventListener('change', function () {
  if (!miniature01DOM.files) return;

  const file = miniature01DOM.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    if (!event.target) return;

    const img = new Image();
    img.onload = function () { images.miniature01 = img; }
    img.src = String(event.target.result);
  }
  reader.readAsDataURL(file);
});

// # Miniatura 02
miniature02DOM.addEventListener('change', function () {
  if (!miniature02DOM.files) return;

  const file = miniature02DOM.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    if (!event.target) return;

    const img = new Image();
    img.onload = function () { images.miniature02 = img; }
    img.src = String(event.target.result);
  }
  reader.readAsDataURL(file);
});

// # Miniatura 03
miniature03DOM.addEventListener('change', function () {
  if (!miniature03DOM.files) return;

  const file = miniature03DOM.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    if (!event.target) return;

    const img = new Image();
    img.onload = function () { images.miniature03 = img; }
    img.src = String(event.target.result);
  }
  reader.readAsDataURL(file);
});

// # Miniatura 04
miniature04DOM.addEventListener('change', function () {
  if (!miniature04DOM.files) return;

  const file = miniature04DOM.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    if (!event.target) return;

    const img = new Image();
    img.onload = function () { images.miniature04 = img; }
    img.src = String(event.target.result);
  }
  reader.readAsDataURL(file);
});


window.onload = () => {
  if (buttonGeneratorDOM) buttonGeneratorDOM.addEventListener('click', generateThumbs);
};

Promise.all([fontSwissBlackWoff.load(), fontSwissNormalWoff.load(), fontSwissHeavyWoff.load()]).then(() => {
  buttonGeneratorDOM.innerHTML = 'Gerar';
}); 