
import React from "react";
import Layout from '@/Layouts/Layout'
import "../../../css/welcome.css";  // Asegúrate de que esta ruta sea correcta



export default function Welcome() {
  return (
    <Layout>
      <head>
      <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#ffd700"/>
            <meta name="robots" content="index, follow"/>


            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
            <meta name="apple-mobile-web-app-title" content="AlbaPan"/>


            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"/>
            <link rel="icon" sizes="192x192" href="/icons/ALBAPAN-192X192.png"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>


            <meta property="og:title" content="AlbaPan"/>
            <meta property="og:description" content="Panadería, Pan, Pasteles, Pan Fresco, AlbaPan, Productos de Panadería, Panadería en Línea, Pedidos de Pan, PWA panadería"/>
            <meta property="og:image" content="/images/ALBAPAN.png"/>
            <meta property="og:url" content="https://www.facebook.com/profile.php?id=100071772542007&mibextid=JRoKGix"/>
</head>
      </head>

    <div className="container">
      
        

        <section className='somos'>
              <h2 className='titulo1'>¿Quiénes Somos?</h2>
               < div class="cuadro-texto">
                    <p><em>La panadería es una empresa familiar con una rica historia que se remonta a hace 43 años. Fundada sobre la pasión y el conocimiento transmitidos por el señor Samuel Alba Barriga, uno de los primeros maestros panaderos de la ciudad de Acámbaro, Guanajuato, México, la familia ha mantenido viva la tradición de la panadería artesanal desde sus inicios.</em></p>

                    <p><em>El señor, conocido por su dedicación y habilidad, estableció la panadería con el firme propósito de ofrecer a la comunidad productos frescos y de alta calidad, elaborados con técnicas tradicionales. A lo largo de los años, su legado ha sido conservado, asegurándose que cada pieza de pan que sale del horno refleje el mismo cuidado y artesanía que él inculcó.</em></p>

                    <p><em>Con el paso del tiempo, han integrado nuevas tecnologías y métodos modernos para mejorar la producción, sin perder de vista sus raíces. Este equilibrio entre tradición y modernidad les permite seguir ofreciendo los mismos sabores auténticos que sus clientes han amado por décadas, mientras innovan para satisfacer las necesidades del presente.</em></p>

                    <p><em>Hoy, la panadería sigue siendo un pilar en la ciudad, un lugar donde las generaciones se encuentran para disfrutar de un pan que cuenta una historia de tradición, esfuerzo y amor por el oficio.</em></p>
                    
                </ div>

                <div className='Fondo'>
                  <img src="/img/ALBAPAN.PNG" alt="logo" />
                </div>

            </section>

            <section class="contenedor">
    <div class="mision">
        <h2 className='titulo1'>Misión</h2>
        <p><em>"Ofrecer productos de panadería artesanal de alta calidad, elaborados con técnicas tradicionales y modernizadas, que preservan el legado de nuestro fundador mientras integramos nuevas tecnologías. Nos comprometemos a satisfacer las necesidades de nuestros clientes con productos frescos y auténticos, fomentando un ambiente acogedor y promoviendo la responsabilidad social y ambiental."</em></p>
    </div>

    <div class="vision">
        <h2 className='titulo1'>Visión</h2>
        <p><em>"Ser una panadería líder en nuestra comunidad y más allá, reconocida por mantener viva la tradición del pan artesanal mientras nos adaptamos a las innovaciones tecnológicas. Aspiramos a ser un referente en sostenibilidad, calidad y responsabilidad social, contribuyendo activamente al bienestar de la comunidad."</em></p>
    </div>

    <div class="valores">
        <h2 className='titulo1'>Valores</h2>
        <p><em>
            • Tradición: Respetamos y mantenemos vivas las técnicas y recetas transmitidas por generaciones.<br />
            • Innovación: Integramos tecnologías modernas sin perder la esencia de la panadería artesanal.<br />
            • Calidad: Nos esforzamos por ofrecer productos frescos, auténticos y de la más alta calidad.<br />
            • Sostenibilidad: Nos comprometemos con prácticas responsables que minimicen el impacto ambiental y fomenten el uso de recursos sostenibles.<br />
        </em></p>
    </div>
</section>

      <section>
        <h2 className="titulo1">Opiniones</h2>
        <div className="opinions">
          <p>Opinión 1: "Excelentes productos y atención."</p>
          <p>Opinión 2: "Siempre frescos y deliciosos."</p>
        </div>
      </section>

      <div className="info-container">
        <div className="icon-text">
          <div className="icon">🏠</div>
          <div className="text">PICK UP EN TIENDA</div>
        </div>
        <div className="icon-text">
          <div className="icon">🎂</div>
          <div className="text">GARANTÍA DE SATISFACCIÓN</div>
        </div>
        <div className="icon-text">
          <div className="icon">📞</div>
          <div className="text">SERVICIO AL CLIENTE</div>
        </div>
        <div className="icon-text">
          <div className="icon">💳</div>
          <div className="text">PAGO SEGURO</div>
        </div>
      </div>

      
      
    </div>
    </Layout>
  );
}


