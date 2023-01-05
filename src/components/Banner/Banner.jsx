import './Banner.css'

function Banner({ image, sentence }) {
  return (
    <div className="bannerWrapper">
      <img src={image} alt="Paysage naturel." />
      <h1>{sentence}</h1>
    </div>
  )
}

export default Banner
