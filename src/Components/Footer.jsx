import "./Footer.css"

export const Footer = () => {
  return (
    //Footer
    <>
      <footer id="contacto" className="Footer">
        <div className="Footer-box">
          <div className="Footer-box-logo">
            <img
              src="/Logo-yellow.png"
              alt="logo paw love"
              className="Footer-box-logo"
            />
          </div>

          <div className="Footer-box-menu">
            <ul className="Footer-box-menu-info">
              <li className="Footer-box-contacto-info-menu">Menú</li>
              <li>
                {" "}
                <a href="#sobre-nosotros">Sobre nosotros</a>
              </li>
              <li>
                {" "}
                <a href="#gatos">Gatos</a>
              </li>
              <li>
                {" "}
                <a href="#perros">Perros</a>
              </li>
            </ul>
          </div>

          <div className="Footer-box-contacto">
            <ul className="Footer-box-contacto-info">
              <li className="Footer-box-contacto-info-contacto">Contacto</li>
              <li>644 693 574</li>
              <li>hola@pawlove.es</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
