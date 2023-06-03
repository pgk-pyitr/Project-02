const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const imageGallery = document.getElementById("imageGallery");

async function fetchImages(query) {
    try {
        const apiKey = 'd8UvN6xRkmGof81fM8r0ltx69FmtWMhE';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`;

        const response = await fetch(url);
        const data = await response.json();

        displayImages(data.data);
    } catch (error) {
        console.error('Failed to fetch images', error);
        }
}

function displayImages(images) {
    imageGallery.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.images.fixed_height.url;
        imgElement.alt = image.title;
        imageGallery.appendChild(imgElement);
    });
}

