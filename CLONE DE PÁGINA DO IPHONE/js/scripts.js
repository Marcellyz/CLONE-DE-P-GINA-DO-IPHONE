// Seleção dos Elementos

const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#product-image");

// Eventos

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected")
        });

        const button = e.target;

        const id = button.getAttribute("id");
        button.querySelector(".color").classList.add("selected");

        image.classList.add("#chaging");
        image.setAttribute("src", `img/iphone_${id}.jpg`)
    })
})