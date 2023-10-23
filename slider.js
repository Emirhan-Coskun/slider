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

    getBaslik() {
        baslik.innerHTML = "Resim" + " " + Number(this.index + 1) + "/" + this.imageList.length
    }
};

const slider = new Slider(imageList);
let img = slider.getImage();

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const image = document.querySelector("#image");
const baslik = document.querySelector(".baslik");
const imgBox = image.parentElement.parentElement;
const ul = document.querySelector("ul");

window.addEventListener("load", () => {
    let img = slider.getImage();
    displayImage(img);
    slider.getBaslik();
    displayDotList(imageList.length);
    isSelected();
});

prev.addEventListener("click", () => {
    prevImage();
    slider.getBaslik();
    isSelected();
});

next.addEventListener("click", () => {
    nextImage();
    slider.getBaslik();
    isSelected();
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
    }, 1);
};

function fade() {
    imgBox.classList.remove("fade");
};

const displayDotList = (list) => {
    for (let i = 0; i < list; i++) {
        let liTag = `<li li-index="${i}" onclick="" class="dot" id="dot"></li>`;
        ul.insertAdjacentHTML("beforeend", liTag);
    };
};

const isSelected = () => {
    selectedDot();
};

function selectedDot() {
    for (let li of ul.querySelectorAll("li")) {
        if (li.classList.contains("selected")) {
            li.classList.remove("selected");
        }
        if (li.getAttribute("li-index") == slider.index) {
            li.classList.add("selected");
        }
    }
};

let li = ul.getElementsByClassName("dot");

