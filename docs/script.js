


let createDivs = () => {
    let container = document.querySelector(".container");

    for (let i = 1; i <= 256; i++) {
        const div = document.createElement("div");
        div.classList.add(`section`);
        div.classList.add(`${i}`);
        container.appendChild(div);
    }
}


let btn = document.querySelector("button");
btn.addEventListener("click", createDivs);



