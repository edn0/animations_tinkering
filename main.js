function getRandomIntInclusive(min, max) {
    console.log("//getRandomIntInclusive")
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function randomizePolygons() {
    for (let i = 0; i < 4; i++) {
        console.log(i + "//randomizePolygons")
        randomizePolygon(i);
    }
}

function randomizePolygon (id) { 
    console.log("//randomizePolygon")
    let randomPolygonID = "randomPolygon" + id;
    let randomPolygon = document.getElementById(randomPolygonID);

    randomPolygon.style.width = getRandomIntInclusive(20, 150);

    randomPolygon.style.height = getRandomIntInclusive(20, 100);

    newR = getRandomIntInclusive(0, 255);
    newG = getRandomIntInclusive(0, 255);
    newB = getRandomIntInclusive(0, 255);
    newColor = "rgb(" + newR + "," + newG + "," + newB + ")";
    randomPolygon.style.backgroundColor = newColor;
    
    document.getElementById("randomShapes").style.gap = "0";
}

setInterval(randomizePolygons, 1000)