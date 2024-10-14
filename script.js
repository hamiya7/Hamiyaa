console.log("Welcome to Miya's personal profile!");

// Event listener untuk masing-masing item pendidikan
document.getElementById("elementary").addEventListener("click", function() {
    displayImage("img/sd.png", "Elementary School", "https://l1nk.dev/dj2Tx");
});

document.getElementById("middle").addEventListener("click", function() {
    displayImage("img/mts.png", "Middle School", "https://daftarsekolah.net//");
});

document.getElementById("high").addEventListener("click", function() {
    displayImage("img/sma.png", "High School", "https://smansa-mjl.sch.id/");
});

document.getElementById("polytechnic").addEventListener("click", function() {
    displayImage("img/polman.png", "Polytechnic", "https://polman-bandung.ac.id/");
});

function displayImage(imageSrc, altText, linkUrl) {
    const imgElement = document.getElementById("education-img");
    const imgContainer = document.getElementById("education-image");
    const linkElement = document.getElementById("education-link");

    imgElement.src = imageSrc;
    imgElement.alt = altText;
    linkElement.href = linkUrl;  // Mengatur tautan
    imgContainer.classList.remove("hidden");  // Menampilkan gambar
}
