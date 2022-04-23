const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <footer>
    footer
  </footer>
`;

class footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.appendChild(footerTemplate.content.cloneNode(true));
	}
}

customElements.define("footer-component", footer);
