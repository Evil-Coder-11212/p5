function preload() {

}

function setup() {
    canvas = createCanvas(600, 600);
    video = createCapture(VIDEO);
    video.hide();

    tintColor = "";
}

function draw() {
    image(video, 0,0, 600, 400);
    tint(tintColor);
}

const take_snapshot = () =>{
    save("Photo.png");
}

const applyFilter = () =>{
    tintColor = document.querySelector("#enterColor").value;
}