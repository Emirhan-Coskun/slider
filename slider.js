"use strict";

class Image {
    constructor(file) {
        this.file = file;
    }
};

const imageList = [
    new Image("1.jpg"),
    new Image("2.jpg"),
    new Image("3.jpg"),
];

class Slider {
    constructor(imageList) {
        this.imageList = imageList;
        this.index = 0;
    }

    getImage() {
        return this.imageList[this.index];
    }

    next() {
        if (this.index + 1 != this.imageList.length) {
            this.index++;
        } else {
            this.index = 0;
        }
    }

    prev() {
        if (this.index != 0) {
            this.index--;
        } else {
            this.index = this.imageList.length - 1;
        }
    }

};

const slider = new Slider(imageList);
let img = slider.getImage();

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const image = document.querySelector("#image");
const imgBox = image.parentElement.parentElement;

window.addEventListener("load", () => {
    let img = slider.getImage();
    displayImage(img);
});

prev.addEventListener("click", () => {
    prevImage();
});

next.addEventListener("click", () => {
    nextImage();
});

function nextImage() {
    slider.next();
    let img = slider.getImage();
    fade();
    displayImage(img);
};

function prevImage() {
    slider.prev();
    let img = slider.getImage();
    fade();
    displayImage(img);
};

function displayImage(img) {
    image.src = "image/" + img.file;
    setTimeout(() => {
        imgBox.classList.add("fade");
    }, 50);
};

function fade() {
    imgBox.classList.remove("fade");
};


