import "./Adopcion.css";

export const Adopcion = () => {
  return (
    <section className="Section-content Story">
      <div className="Section-texto">
        <h2 className="Section-texto-h2">
          De Refugio a Hogar para Siempre: Nuestras Historias de Éxito
        </h2>
      </div>
    
    <div className="Happystory">
      <div className="Section-col-info">
        <img src="/happy-story-uno.jpg" alt="" className="Section-img-happystory" />
        <h4 className="Section-col-info-detail-happystory Nombre">Diego & Flex</h4>
        <p className="Section-col-info-detail-happystory Descripcion">Una Historia de Amor Incondicional</p>
      </div>

      <div className="Section-col-info">
        <img src="/happy-story-dos.jpg" alt="" className="Section-img-happystory" />
            <h4 className="Section-col-info-detail-happystory Nombre">Marta & Coco</h4>
            <p className="Section-col-info-detail-happystory Descripcion">El Poder de las Segundas Oportunidades</p>
      </div>

      <div className="Section-col-info">
        <img src="/happy-story-tres.jpg" alt="" className="Section-img-happystory" />
            <h4 className="Section-col-info-detail-happystory Nombre">Cristina & Bella</h4>
            <p className="Section-col-info-detail-happystory Descripcion">Una Historia Conmovedora </p>
      </div>
      </div>
    </section>
  );
};
