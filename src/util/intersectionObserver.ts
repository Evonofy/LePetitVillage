const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        const index = Array.from(hiddenElements).indexOf(entry.target);
        const hideClass = `hide-section-${index + 1}`;
        const showClass = `show-section-${index + 1}`;

        if (entry.isIntersecting) {
            entry.target.classList.add(showClass);
            entry.target.classList.remove(hideClass);
        } else {
            entry.target.classList.add(hideClass);
            entry.target.classList.remove(showClass);
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden-section');
hiddenElements.forEach((el) => observer.observe(el));