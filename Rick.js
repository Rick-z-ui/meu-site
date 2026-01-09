    /*código da barra de pesquisa*/
    const searchContainer = document.querySelector('.search-container');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
    });



/*código das janelas dos botões*/
    const buttons = document.querySelectorAll(".info-btn");
    const boxes = document.querySelectorAll(".info-box");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetID = btn.getAttribute("data-target");
            const targetBox = document.getElementById(targetID);

            boxes.forEach(box => {
                if (box !== targetBox) {
                    box.classList.remove("active");
                }
            });

            targetBox.classList.toggle("active");
        });
    });
















