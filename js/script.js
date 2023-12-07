function calculateLuas() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert("Masukkan angka yang valid untuk alas dan tinggi.");
        return;
    }

    var area = 0.5 * base * height;

    document.getElementById('areaResult').innerText = "Luas: " + area.toFixed(2);
}

function calculateKeliling() {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("Masukkan angka yang valid untuk panjang sisi.");
        return;
    }

    var perimeter = sideA + sideB + sideC;

    document.getElementById('perimeterResult').innerText = "Keliling: " + perimeter.toFixed(2);
}
