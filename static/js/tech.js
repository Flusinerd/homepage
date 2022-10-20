const angularTech = document.getElementById('tech-card-angular');
const techButtons = document.getElementsByClassName('tech-button');
for (const button of techButtons) {
    const techName = button.getAttribute('data-tech-name');
    if (!techName) {
        continue;
    }
    const techCard = document.getElementById(`tech-card-${techName}`);
    if (!techCard) {
        continue;
    }
    let techIcon;
    button.childNodes.forEach((item) => {
        if (item instanceof HTMLImageElement && item.classList.contains('tech-icon')) {
            techIcon = item;
            return;
        }
    });
    if (!techIcon) {
        continue;
    }
    button.addEventListener('click', () => {
        if (!techCard.classList.contains('visible')) {
            techCard.classList.add('animate-in');
            techCard.classList.remove('animate-out');
            techCard.classList.add('visible');
        }
        else {
            techCard.classList.remove('animate-in');
            techCard.classList.add('animate-out');
            setTimeout(() => {
                techCard.classList.remove('visible');
            }, 1000);
        }
        techIcon.classList.toggle('active');
    });
}
//# sourceMappingURL=tech.js.map