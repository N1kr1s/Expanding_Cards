"use strict";
class ToggleElement {
    expandElement(element) {
        const panels = document.querySelectorAll(element);
        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
                this.removeActiveClasses(panels);
                panel.classList.add('active');
            });
        });
    }
    removeActiveClasses(elements) {
        elements.forEach((element) => element.classList.remove('active'));
    }
}
const toggleElement = new ToggleElement();
toggleElement.expandElement('.panel');
