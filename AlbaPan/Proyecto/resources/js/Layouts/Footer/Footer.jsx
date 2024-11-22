import { Link, usePage } from "@inertiajs/react"
import Suscribe from "./Suscribe"
import ApplicationLogo from "@/Components/ApplicationLogo"
import SocilaMediaIcon from "./SocilaMediaIcon";

const Footer = () => {
    const { settings } = usePage().props;
    return (
        <>
           
            <div className="footer">
        <div className="column">
          <h3>Alba Pan</h3>
          <ul><li>Especiales</li><li>Sucursal</li></ul>
        </div>
        <div className="column">
          <h3>Invitados</h3>
          <ul><li>Mi Cuenta</li><li>Atención a clientes</li><li>Facturación</li></ul>
        </div>
        <div className="column">
          <h3>Legales</h3>
          <ul><li>Aviso de Privacidad</li><li>Términos y Condiciones</li></ul>
        </div>
        <div className="column">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <div className="icon"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" /></div>
            <div className="icon"><img src="/images/WhatsApp.svg.png" alt="whatsapp" className='whats'/></div>
          </div>
        </div>
      </div>
          <div className="footer-note">
            © 2024 Alba Pan Todos los Derechos Reservados
          </div>
        </>
    )
}


export default Footer
