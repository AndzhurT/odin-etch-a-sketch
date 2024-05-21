


let createDivs = () => {
    const number = parseInt(prompt("Type the number of squares per side (e.g., 16 for a 16x16 grid)"));
    const container = document.querySelector(".container");

    const totalNumber = number * number;
    const divWidthPercentage = 100 / number;

    for (let i = 1; i <= totalNumber; i++) {
        const div = document.createElement("div");

        div.classList.add(`section`);
        div.classList.add(`${i}`);
        div.style.flexBasis = divWidthPercentage + "%";
        div.style.height = divWidthPercentage + "%";

        container.appendChild(div);
    }


    const divs = document.querySelectorAll(".section");

    divs.forEach(divs => divs.addEventListener("mouseover", setColor));
}


let btn = document.querySelector("button");
btn.addEventListener("click", createDivs);



let setColor = (e) => {
    let target = e.target;
    target.classList.add("colored");
    console.log(target);
}



// modify flex:basis based on the amount of divs per side