customElements.define('mapcomponent',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('mapcomponent');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);