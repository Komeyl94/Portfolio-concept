window.onload = function() {
    const data = [
        { 
            "url": "http://komeyl.me/images/1.jpg",
            "qualities": [1, 2, 3, 10, 7 ,8]
        },
        { 
            "url": "http://komeyl.me/images/2.jpg",
            "qualities": [5, 7, 4, 6, 9, 3]
        },
        { 
            "url": "http://komeyl.me/images/3.jpg",
            "qualities": [4, 5, 1, 8, 1, 2]
        }
    ];
    let images = [
        "http://komeyl.me/images/1.jpg",
        "http://komeyl.me/images/2.jpg",
        "http://komeyl.me/images/3.jpg"
    ];
    let body = document.getElementById("body");
    let photo = document.getElementById("my_photo");
    let img = document.getElementsByClassName("img");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    let currentPic = 0;

    photo.addEventListener("click", function () {
        body.classList.add("open");
        img[0].style.backgroundImage = "url(" + images[currentPic] + ")";
        next.classList.add("show");
        prev.classList.add("show");
        showQualities();
    });

    function nextPhoto() {
        body.classList.add("exit");
        body.classList.remove("open");
        setTimeout(function () {
            img[0].style.backgroundImage = "url(" + images[currentPic] + ")";
        }, 50);
        setTimeout(function () {
            body.classList.remove("exit");
            body.classList.add("open");
        }, 300);
        showQualities();
    }

    function showQualities(index) {
        let bubble = document.getElementsByClassName("pulse");
        for (var i = 0; i < bubble.length; ++i) {
            bubble[i].classList.remove('show');
            bubble[i].classList.remove('bounceIn');
        }
        data[currentPic].qualities.map(function (item, index) {
            bubble[item].style.animationIterationCount = 1;
            bubble[item].classList.add("show");
            bubble[item].classList.add("bounceIn");
        })
    }

    next.addEventListener("click", function () {
        if (currentPic !== 2) {
            currentPic += 1;
            nextPhoto();
        } else {
            currentPic = 0;
            nextPhoto();
        }
    });

    prev.addEventListener("click", function () {
        if (currentPic !== 0) {
            currentPic -= 1;
            nextPhoto();
        } else {
            currentPic = images.length - 1;
            nextPhoto();
        }
    });
}