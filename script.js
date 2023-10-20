let headerInfo = `
    <nav>
          <ul class="nav__links">
            <li><a href="../src/index.html">Home</a></li>
            <li><a href="../src/foodweb.html">Food Web</a></li>
            <li><a href="../src/map.html">Map</a></li>
            <li><a href="../src/info.html">Info</a></li>
          </ul>
    </nav>
        <a class="cta" href="https://github.com/CS484-Project" target="_blank"><button>Project Info</button></a>
`

const body = document.getElementsByTagName("BODY")[0];
const header = document.createElement("header");
header.id = "header";
const headerItem = (header.innerHTML += headerInfo);
body.insertBefore(header, body.firstChild);