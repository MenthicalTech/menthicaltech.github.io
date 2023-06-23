function preloadBannerImages() {
    const bannerImages = ['images/banner1.jpg', 'images/banner2.jpg', 'images/banner3.jpg'];
    for (let i = 0; i < bannerImages.length; i++) {
        new Image().src = bannerImages[i];
    }
}

function startBannerRotation() {
    const bannerImages = document.querySelectorAll('#bannerImages img');
    let index = 0;

    setInterval(() => {
        bannerImages[index].style.display = 'none';
        index = (index + 1) % bannerImages.length;
        bannerImages[index].style.display = 'block';
    }, 3000);
}

function preloadGalleryImages() {
    const galleryImages = document.querySelectorAll('#gallery img');
    for (let i = 0; i < galleryImages.length; i++) {
        new Image().src = galleryImages[i].src;
    }
}

function showImageDescription(descriptionId) {
    const description = document.getElementById(descriptionId);
    description.style.display = 'block';
}

function hideImageDescription(descriptionId) {
    const description = document.getElementById(descriptionId);
    description.style.display = 'none';
}
