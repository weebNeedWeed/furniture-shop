const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <header>
    header
    <i class="fa-brands fa-accusoft"></i>
  </header>
`;

class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.appendChild(headerTemplate.content.cloneNode(true));
	}
}

customElements.define("header-component", Header);
