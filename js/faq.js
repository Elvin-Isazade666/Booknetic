
// Accordion

// Tiklanan elementin secilmesi
const faq_title = document.querySelectorAll(".accordion_faq_title");
for (let i = 0; i < faq_title.length; i++) {
    faq_title[i].addEventListener("click", function () {

        // Bir content acildiqda digerinin baglanmasi
        var active = document.querySelector(".accordion_faq_item.active");
        this.parentNode.classList.toggle("active");
        if (active != null && active != this.parentNode) {
            active.classList.remove("active");
            active.children[1].style.maxHeight = null;
            active.children[0].children[1].classList.replace("fa-circle-arrow-up","fa-circle-arrow-down");
            
        }
        // Animasiya ile hereket etmek ucun contentin gorunub gorunmemesi
        if (this.nextElementSibling.style.maxHeight == 0) {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
        } else {
            this.nextElementSibling.style.maxHeight = null;
        }
        // Iconlari evez etmek
        if (this.children[1].classList.contains("fa-circle-arrow-down")) {
            this.children[1].classList.replace("fa-circle-arrow-down", "fa-circle-arrow-up");
        } else {
            this.children[1].classList.replace("fa-circle-arrow-up", "fa-circle-arrow-down");
        }
    });

}