import app from 'apprun';

const main_element = 'main-app';
const nav = [
  {
    "text": "Home",
    "link": "/"
  },
  {
    "text": "Contact",
    "link": "/contact"
  },
  {
    "text": "About",
    "link": "/about"
  }
];

export default () => {
  return <>
    <div class="d-flex vh-100">
      <main class="flex-grow-1">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">My Site</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {nav && nav.map(({ text, link }) =>
                  <li class="nav-item">
                    <a class="nav-link" href={link}>
                      {text}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div class="container">
          <div id={main_element}></div>
        </div>
      </main>
    </div>
  </>;

}
