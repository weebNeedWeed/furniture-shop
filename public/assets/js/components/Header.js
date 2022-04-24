const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <header>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="./home/home.html">Furnitures Shop</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="./home/home.html">Home</a></li>
          <li><a href="./cart.html">Cart</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="./signup/signup.html"><span class="fa fa-user"></span> Sign Up</a></li>
          <li><a href="./login/login.html"><span class="fa fa-key"></span> Login</a></li>
        </ul>
      </div>
    </nav>
    <!-- <div id="navbar">
      <div id="nav-title">
        <a href="#">Furnitures Shop</a>
      </div>
      <div id="nav-buttons">
        <a href="#">Home</a>
        <a href="#">Cart</a>
      </div>
      <div id="nav-login">
        <a href="#">Sign-Up</a>
        <a href="#">Login</a>
      </div> -->
      <!-- <a class="float-left" href="#">Home</a>
      <a class="float-left" href="#">Cart</a>
      <a class="float-right" href="#">Login</a>
      <a class="float-right" href="#">Sign-up</a> -->
    </div>
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
