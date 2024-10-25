import "./Banner.css"

export const Banner = () => {
  return (
    //Banner
    <div className="Banner-home">
      <div className="Banner-wrapper-home">
        <div className="Banner-col-home">
          <h2 className="Banner-h2-home">Bienvenidos</h2>
          <span className="Banner-span-text">
            al lugar donde las segundas oportunidades comienzan!{" "}
          </span>
          <p className="Banner-p-home">
            Tu próxima compañía fiel podría estar esperando aquí mismo. Adopta,
            dona o involúcrate y ayuda a crear un mundo donde cada mascota tenga
            el hogar que merece.
          </p>
          <span className="Banner-span">
            ¡Juntos podemos hacer la diferencia!
          </span>
        </div>
      </div>
    </div>
  )
}
