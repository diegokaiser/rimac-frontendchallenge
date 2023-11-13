import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../../context/UserProvider'
import { PlanContext } from '../../context/PlanProvider'
import IcoUser from './../../assets/images/icons/user.svg'
import { Breadcrumbs } from '../elements/Breadcrumbs'
import { Header } from '../templates/Header'

export function Summary () {
  const [userObj, setUserObj] = useContext(UserContext)
  const [planObj, setPlanObj] = useContext(PlanContext)
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
      <Header page={'summaries'} />
      <div className="summary">
        <div className="summary__content">
          <div className="steps">
            <div className="container">
              <div className="d-desktop">
                <div className="steps__content">
                  <button disabled>
                    <span>1</span>
                    <strong>Planes y coberturas</strong>
                  </button>
                  <div className="dots"></div>
                  <button>
                    <span>2</span>
                    <strong>Resumen</strong>
                  </button>
                </div>
              </div>
              <div className="d-mobile">
                <div className="steps__content">
                  <button
                    onClick={handleGoBack}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" transform="rotate(90 10 10)" stroke="#4F4FFF" strokeWidth="2"/>
                      <path d="M7.55317 9.99998L10.8094 6.74686L11.6907 7.62811L9.32192 9.99998L11.6907 12.3719L10.8094 13.2531L7.55317 9.99998Z" fill="#4F4FFF"/>
                    </svg>
                  </button>
                  <div className="step__counter">
                    paso 1 de 2
                    <div className="progress">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Breadcrumbs />
          <div className="data">
            <div className="container">
              <div className="data__content">
                <h2>Resumen del seguro</h2>
                <div className="profile">
                  <strong>Precios calculados para:</strong>
                  <h4>
                    <img src={IcoUser} alt={`${userObj.name} ${userObj.lastName}`} />
                    {userObj.name} {userObj.lastName}
                  </h4>
                  <div className="myplan">
                    <div className="myplan__item">
                      <p>Responsable de pago</p>
                      <p>DNI: {userObj.dni}</p>
                      <p>Celular: {userObj.cel}</p>
                    </div>
                    <div className="myplan__item">
                      <p>Plan Elegido</p>
                      <p>{planObj.name}</p>
                      <p>Costo del Plan: {planObj.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
