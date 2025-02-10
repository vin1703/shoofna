
const sections = [
    '.carousel-container',
    '.section3',
    '.element-container',
    '.container',
    '.footer'
];


sections.forEach(section => {
    const element = document.querySelector(section);
    if (element) {
        element.classList.add('animate');
    }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            entry.target.classList.add('pop-up');
            
         
            if (entry.target.classList.contains('element-container')) {
                const cards = entry.target.querySelectorAll('.icon-card');
                cards.forEach((card, index) => {
                    card.classList.add('pop-up', `delay-${index * 200}`);
                });
            }
            
           
            if (entry.target.classList.contains('container')) {
                const cards = entry.target.querySelectorAll('.card');
                cards.forEach((card, index) => {
                    card.classList.add('pop-up', `delay-${index * 200}`);
                });
            }
            
       
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.4, 
    rootMargin: '0px'
});


sections.forEach(section => {
    const element = document.querySelector(section);
    if (element) {
        observer.observe(element);
    }
});


document.querySelectorAll('.icon-card, .card').forEach(element => {
    element.classList.add('animate');
});