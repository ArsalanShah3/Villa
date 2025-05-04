function showDiv() {
    const div = document.getElementById("div2");
    const div1 = document.getElementById("div3");
    const div2 = document.getElementById("div4");
    if (div.style.display === "none") {
        div.style.display = "inline";
        div1.style.display = "none";
        div2.style.display = "none";
    } else {
        div.style.display = "none";
    }
}
function showDiv1() {
    const div = document.getElementById("div3");
    const div1 = document.getElementById("div2");
    const div2 = document.getElementById("div4");
    if (div.style.display === "none") {
        div.style.display = "inline";
        div1.style.display = "none";
        div2.style.display = "none";
    } else {
        div.style.display = "none";
    }
}
function showDiv2() {
    const div = document.getElementById("div4");
    const div1 = document.getElementById("div3");
    const div2 = document.getElementById("div2");
    if (div.style.display === "none") {
        div.style.display = "inline";
        div1.style.display = "none";
        div2.style.display = "none";
    } else {
        div.style.display = "none";
    }
}
