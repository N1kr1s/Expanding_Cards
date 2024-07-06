class ToggleElement {
  expandElement(element: string): void {
    const panels = document.querySelectorAll(element)
    panels.forEach((panel) => {
      panel.addEventListener('click', () => {
        this.removeActiveClasses(panels)
        panel.classList.add('active')
      })
    })
  }

  removeActiveClasses(elements: NodeListOf<Element>): void {
    elements.forEach((element) => element.classList.remove('active'))
  }
}

const toggleElement = new ToggleElement()
toggleElement.expandElement('.panel')
