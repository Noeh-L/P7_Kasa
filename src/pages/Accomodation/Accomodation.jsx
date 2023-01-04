import { useParams } from 'react-router-dom'
import datas from '../../datas/datas.json'
import Slideshow from '../../components/Slideshow'
import './Accomodation.css'
import Collapse from '../../components/Collapse/Collapse'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Error from '../Error'

function Accomodation() {
  const { idInURL } = useParams()
  const currentAccom = datas.find((accom) => accom.id === idInURL)

  const everyIds = []
  datas.forEach((accomodation) => {
    everyIds.push(accomodation.id)
  })
  const doIdExist = everyIds.find((id) => id === idInURL) ? true : false
  console.log(everyIds, idInURL, doIdExist)

  if (doIdExist) {
    return (
      <div className="accomodationContainer">
        <Slideshow
          pictures={currentAccom.pictures}
          altText={currentAccom.title}
        />
        <section className="infoContainer">
          <div className="infoContainer-header">
            <div className="infoContainer-header-left">
              <div className="infoContainer-header-left-title">
                <h1>{currentAccom.title}</h1>
                <p>{currentAccom.location}</p>
              </div>
              <div className="infoContainer-header-left-tags">
                {currentAccom.tags.map((tag, index) => {
                  return <Tag key={`${tag}-${index}`} content={tag} />
                })}
              </div>
            </div>

            <div className="infoContainer-header-right">
              <div className="infoContainer-header-right-landlord">
                <p>{currentAccom.host.name}</p>
                <div className="infoContainer-header-right-landlord-picture">
                  <img
                    src={currentAccom.host.picture}
                    alt={currentAccom.host.name}
                  />
                </div>
              </div>
              <Rating rate={currentAccom.rating} />
            </div>
          </div>
          <div className="infoContainer-description">
            <Collapse
              widthSetted={'47%'}
              question={'Description'}
              answer={currentAccom.description}
            />
            <Collapse
              widthSetted={'47%'}
              question={'Équipements'}
              answer={currentAccom.equipments.map((equipment, index) => (
                <p key={`${equipment}-${index}`}>{equipment}</p>
              ))}
            />
          </div>
        </section>
      </div>
    )
  } else {
    return <Error />
  }
}

export default Accomodation
