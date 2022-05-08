const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <a href="/index.html" class="footer__logo">NVM</a>
          <ul class="contact">
            <li class="contact__logo contact__logo--facebook">
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li class="contact__logo contact__logo--twitter">
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li class="contact__logo contact__logo--instagram">
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div> 
        <div class="col-md-8">
          <div class="row h-100">
            <div class="col-md-3 col-sm-12">
              <ul class="footer-nav">
                <li class="footer-nav__item">
                  <a href="/index.html" class="footer-nav__link">Trang chủ</a>
                </li>
              </ul>
            </div>
            
            <div class="col-md-3 col-sm-12">
              <ul class="footer-nav">
                <li class="footer-nav__item">
                  <a href="/preview.html" class="footer-nav__link">Sản phẩm</a>
                </li>
              </ul>
            </div>
            
            <div class="col-md-3 col-sm-12">
              <ul class="footer-nav">
                <li class="footer-nav__item">
                  <a href="/cart.html" class="footer-nav__link">Giỏ hàng</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-12">
              <ul class="footer-nav">
                <li class="footer-nav__item">
                  <a href="/login.html" class="footer-nav__link">Đăng nhập</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p class="footer__copyright">Copyright &copy; 2022 Bản quyền thuộc về NVM.</p>
    </div>
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
