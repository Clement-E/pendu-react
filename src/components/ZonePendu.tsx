interface ZonePenduProps {
  errors: string[];
}
const ZonePendu = ({errors}:ZonePenduProps) => {
  const e = (number: number) => errors.length + 1 > number;
  return (
      <div className="zone-pendu">
        {e(9) && <span className="perdu">Pendu !</span>}
        {e(9) && <img className="jambes" src="../../public/jambes.png" alt=""/>}
        {e(8) && <img className="bras" src="../../public/bras.png" alt=""/>}
        {e(7) && <img className="body" src="../../public/body.png" alt=""/>}
        {e(6) && <img className="tete" src="../../public/tete.png" alt=""/>}
        {e(5) && <img className="corde" src="../../public/corde.png" alt=""/>}
        {e(4) && <img className="angle" src="../../public/angle.png" alt=""/>}
        {e(3) && <img className="potence" src="../../public/horizontal.png" alt=""/>}
        {e(2) && <img className="mat" src="../../public/mat.png" alt=""/>}
        {e(1) && <img className="base" src="../../public/base.png" alt=""/>}
      </div>
  )
}

export default ZonePendu;