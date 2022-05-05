const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    .navbar {
      background-color: #0a0c0a;
    }

    .nav-bar-buttons > * {
      margin-right: 10px;
      border: none;
      color: #d9d6d8;
      background-color: #0a0c0a;
      font-size: 14px;
      font-family: Roboto;
    }
  </style>

  <header>
    <nav class="navbar navbar-expand-sm navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">NVM</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./preview.html">Preview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./cart.html">Cart</a>
            </li>
          </ul>
          <div class="d-flex nav-bar-buttons">
            <a href="./login.html"><i class="fa fa-key"> Login</i></a>
            <a href="./signup.html"><i class="fa fa-user"> Sign - up</i></a>
          </div>
        </div>
      </div>
    </nav>
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
