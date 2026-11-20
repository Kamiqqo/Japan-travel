


const IMAGES = {
  hero: {
    home:        "images/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan.jpg",
    attractions: "images/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan.jpg",
    culture:     "images/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan.jpg",
    tips:        "images/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan.jpg"
  },

  home: {
    card1: "images/red-torii-gates-walkway-fushimi-inari-taisha-shrine-kyoto-japan.jpg",
    card2: "images/fuji-mountains-fujikawaguchiko-city-night-japan.jpg",
    card3: "images/modern-tokyo-street-background.jpg",
    card4: "images/cooking-asian-noodles.jpg"
  },

  attractions: {
    attr1: "images/mount-fuji-tranquil-blue-hour-4k-1366x768.jpg",
    attr2: "images/bea39a693df45ab51a5f0e25cb9ef54f.jpg",
    attr3: "images/aerial-view-tokyo-cityscape-with-fuji-mountain-japan.jpg",
    attr4: "images/images.jpg",
    attr5: "images/images (1).jpg",
    attr6: "images/images (2).jpg"
  },

  culture: {
    cult1: "images/images (3).jpg",
    cult2: "images/images (4).jpg",
    cult3: "images/asian-women-traditional-japanese-kimonos-fushimi-inari-shrine-kyoto-japan_335224-245.avif",
    cult4: "images/images (5).jpg"
  },

  tips: {
    tip1: "images/2019_2410.gif",
    tip2: "images/images (6).jpg",
    tip3: "images/images.png",
    tip4: "images/images (7).jpg",
    tip5: "images/istockphoto-1028603300-612x612.jpg",
    tip6: "images/images (8).jpg"
  }
};

function applyImages() {
  document.querySelectorAll('[data-img]').forEach(el => {
    const path = getByPath(IMAGES, el.dataset.img);
    if (path) el.src = path;
  });

  document.querySelectorAll('[data-bg]').forEach(el => {
    const path = getByPath(IMAGES, el.dataset.bg);
    if (path) {
      el.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${path}')`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
    }
  });
}

function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : null), obj);
}

document.addEventListener('DOMContentLoaded', applyImages);