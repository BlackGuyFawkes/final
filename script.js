// JavaScript to make the "Other" input box dynamic

// Function to toggle the visibility of the "Other" input box based on the selected radio button
function toggleOtherInput() {
    const otherRadio = document.getElementById("other");
    const otherInput = document.getElementById("other-topic");

    if (otherRadio.checked) {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}

// Attach the function to the change event of the radio buttons
document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"][name="about"]');
    radioButtons.forEach(function (radio) {
        radio.addEventListener("change", toggleOtherInput);
    });
});
