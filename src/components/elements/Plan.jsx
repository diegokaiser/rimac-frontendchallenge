import PropTypes, { string } from 'prop-types'
import ImgPlan1 from './../../assets/images/plan1.svg'
import ImgPlan2 from './../../assets/images/plan2.svg'
import ImgPlan3 from './../../assets/images/plan3.svg'

export function Plan ({
  index,
  name,
  price,
  discount,
  description,
  handleSelectPlan
}) {

  return (
    <div className="plan">
      <div className="plan__title">
        <h3>
          {name}
        </h3>
        {
          index === 1 ?
          <>
            <img src={ImgPlan1} alt={name} />
          </> :
          index === 2 ?
          <>
            <img src={ImgPlan2} alt={name} />
          </> :
          <>
            <img src={ImgPlan3} alt={name} />
          </>
        }
      </div>
      <div className="plan__price">
        <p>costo del plan</p>
        {
          discount ?
          <>
            <p>$ {price} antes</p>
            <strong>
              $ {price - (price * 0.05)} al mes
            </strong>
          </> :
          <>
            <strong>
              $ {price} al mes
            </strong>
          </>
        }
      </div>
      <div className="plan__desc">
        <ul>
          {
            description.map(desc => {
              return (
                <li
                  key={desc}
                >
                  {desc}
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="plan__actions">
        <button 
          className='btn btn-secondary'
          onClick={(e) => handleSelectPlan(e)}
        >
          Seleccionar Plan
        </button>
      </div>
    </div>
  )
}

Plan.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.bool,
  description: PropTypes.arrayOf(string),
  handleSelectPlan: PropTypes.func
}