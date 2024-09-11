import './HeroCard.scss'

function HeroCard({ name, image }) {
  return (
    <div className="charCard">
      <div className="charName">{name}</div>
      <div className="charImgCont">
         <img src={image.url} alt={`${name} Image`} />
      </div>
    </div>
  )
}

export default HeroCard