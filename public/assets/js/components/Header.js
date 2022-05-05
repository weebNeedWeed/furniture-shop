const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    .nav-bar-buttons > * {
      margin-right: 10px;
      border: none;
      color: #6c757d;
      background-color: #212529;
      font-size: 16px;
      font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
      text-decoration: none;
    }
  </style>

  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">NVM</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./preview.html">Sản phẩm</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./cart.html">Giỏ hàng</a>
            </li>
          </ul>
          <div class="d-flex nav-bar-buttons">
            <a href="./login.html"><i class="fa fa-key"></i> Đăng nhập</a>
            <a href="./signup.html"><i class="fa fa-user"></i> Đăng ký</a>
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
