{
    const hamburger = document.querySelector(".hamburger");
    const bar = document.querySelector(".bar");
    const exit = document.querySelector(".exit");

    bar.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        exit.classList.toggle("pop");
    })
}
{
    const hamburger = document.querySelector(".hamburger");
    const exit = document.querySelector(".exit");

    exit.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        exit.classList.remove("pop");
    })
}