let count = 0;
function increaseCount() {
    count = count + 1;
    // console.log(count);
    document.getElementById("count-el").innerText = count;
}
// let descreaseButton = document.getElementById("decrement-button");

descreaseButton.addEventListener("click", function () {
    if (count > 0) {
        count--;
        document.getElementById("count-el").textContent = count;
    } else {
        document.getElementById("count-el").textContent = 0;
    }
});

// function descreaseCount() {
// document.getElementById("count-el").textContent = count;
// if (count > 0) {
//     count--;
//     document.getElementById("count-el").textContent = count;
// } else {
//     document.getElementById("count-el").textContent = 0;
// }
// }
// let savedCount = 0;
// function saveCount() {
//     document.getElementById("count-saved").textContent += count + " - ";
//     count = 0;
//     document.getElementById("count-el").textContent = count;
// }
