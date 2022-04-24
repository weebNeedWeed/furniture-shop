const navTemplate = document.createElement('template');
  navTemplate.innerHTML = `
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <style>
    nav {
      font-size: 20px;
    }
    #navbar {
      width: 100%;
      /* border: 2px solid red; */
      font-size: 20px;
      margin-bottom: 12px;
      background-color: #062F4D;
      color: #C2C2C4;
      display: flex;
    	flex-direction: row;
    	justify-content: space-between;
      padding: 8px 4px;
      font-size: 24px;
    }

    #navbar a {
      color: #C2C2C4;
      text-decoration: none;
    }

    #nav-buttons, #nav-login {
      display: flex;
      flex-wrap: wrap;
      column-gap: 2em;
    }
  </style>

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
`

class Nav extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navTemplate.content);
    }
}

customElements.define('nav-component', Nav);
