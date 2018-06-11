function setRangeValue(id) {
    
    var slider = document.getElementById(id)

    var output = document.getElementById(id + "Value");

    output.innerHTML = slider.value;
}