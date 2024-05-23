

let assignHover = () => {
    // assign hover effect over added divs
    const divs = document.querySelectorAll(".section");

    divs.forEach(div => div.addEventListener("mouseover", setColor));
}

let setColor = (e) => {
    let target = e.target;
    let color = document.querySelector("#color").value; // get selected color value

    if (e.buttons == 1 || e.buttons == 3) {
        target.style.backgroundColor = color;
    }
    else if (e.buttons == 2) {
        target.style.backgroundColor = "";
    }
}

let getNumberOfDivs = () => {
    let number = parseInt(prompt("Type the number of squares per side from 1 to 100 (e.g., 16 for a 16x16 grid)"));
    while (isNaN(number) || number < 1 || number > 100) {
        number = parseInt(prompt("Please type in the number ranging from 1 to 100."))
    }

    return number;
}

let createDivs = () => {
    let container = document.querySelector(".container");

    // remove divs if they are already added to the container
    if (addedDivs == true) {
        let confirmation = confirm("Are you sure you want to create new divs? This will remove already existing ones ");
        if (confirmation) {
            container.textContent = "";
        }
        else {
            return;
        }
    }

    let number = getNumberOfDivs();

    const totalNumber = number * number;
    const divWidthPercentage = 100 / number;


    for (let i = 1; i <= totalNumber; i++) {
        const div = document.createElement("div");

        div.classList.add(`section`);
        div.classList.add(`${i}`);
        div.style.flexBasis = divWidthPercentage + "%";
        div.style.height = divWidthPercentage + "%";

        container.appendChild(div);
        
        addedDivs = true;
        }
        
    // Assign hover effect over added divs
    container.addEventListener("mouseover", setColor);
}

let resetDivs = () => {
    const divs = document.querySelectorAll(".section");
    divs.forEach(div => {div.style.backgroundColor = "";
                         }); 
}


let addedDivs = false;

let btnCreateDivs = document.querySelector(".createDivs");
btnCreateDivs.addEventListener("click", createDivs);

let btnResetDivs = document.querySelector(".resetDivs");
btnResetDivs.addEventListener("click", resetDivs);

let mainContainer = document.querySelector(".container");
mainContainer.addEventListener("click", assignHover);
