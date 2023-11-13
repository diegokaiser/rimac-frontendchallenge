import PropTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Slider from 'react-slick';
import { getPlan } from '../../hooks/useFetch';
import { calcularEdad } from '../../utils/calcularEdad';
import { UserContext } from '../../context/UserProvider';
import { PlanContext } from '../../context/PlanProvider';
import ImgParaMi from './../../assets/images/parami.svg'
import ImgParaAlguienMas from './../../assets/images/paraalguienmas.svg'
import IcoCheck from './../../assets/images/icons/check.svg'
import { Header } from '../templates/Header'
import { Breadcrumbs } from '../elements/Breadcrumbs';
import { Plan } from '../elements/Plan';

export function Home () {
  const [userObj, setUserObj] = useContext(UserContext)
  const [planObj, setPlanObj] = useContext(PlanContext)
  const [vw, setVw] = useState(window.innerWidth)
  console.log(userObj)
  const navigate = useNavigate()
  const [optionActive, setOptionActive] = useState(false)

  const { status, data } = useQuery({
    queryKey: ['plans'],
    queryFn: getPlan
  })

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleSelectPlan = (e) => {
    const parentEl = e.target.parentElement.parentElement
    const name = parentEl.querySelector('.plan__title h3').innerText
    const price = parentEl.querySelector('.plan__price strong').innerText
    console.log(name, price)
    setPlanObj({
      name: name,
      price: price
    })
    navigate('/resumen')
  }

  const filteredPlans = data?.filter(
    (plan) => calcularEdad(userObj?.birthDay) <= plan.age
  )

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <Header page={'plans'} />
      <div className="home">
        <div className="home__content">
          <div className="steps">
            <div className="container">
              <div className="d-desktop">
                <div className="steps__content">
                  <button>
                    <span>1</span>
                    <strong>Planes y coberturas</strong>
                  </button>
                  <div className="dots"></div>
                  <button disabled>
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
          <div className="profile">
            <div className="container">
              <div className="profile__content">
                <h2>
                  {userObj.name} ¿Para quén deseas cotizar?
                </h2>
                <p>Seleciona la opción que se ajuste más a tus necesidades.</p>
              </div>
            </div>
          </div>
          <div className="options">
            <div className="container">
              <div className="options__content">
                <div 
                  className={`option ${!optionActive ? 'active' : ''}`}
                  onClick={() => setOptionActive(false)}
                >
                  <div className="check">
                    <span>
                      <img src={IcoCheck} alt="Seleccionar" />
                    </span>
                  </div>
                  <div className="subtitle">
                    <img src={ImgParaMi} alt="Para mí" />
                    <h3>Para mí</h3>
                  </div>
                  <p>
                    Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                  </p>
                </div>
                <div 
                  className={`option ${optionActive ? 'active' : ''}`}
                  onClick={() => setOptionActive(true)}
                >
                  <div className="check">
                    <span>
                      <img src={IcoCheck} alt="Seleccionar" />
                    </span>
                  </div>
                  <div className="subtitle">
                    <img src={ImgParaAlguienMas} alt="Para alguien más" />
                    <h3>Para alguien más</h3>
                  </div>
                  <p>
                    Realiza una cotización para uno de tus familiares o cualquier persona.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="plans">
            <div className="container">
              {
                vw <= 480 ?
                <>
                  <div className="plans__content">
                    {
                      status === 'success' ?
                      <>
                        <Slider {...sliderSettings}>
                          {
                            filteredPlans.map((plan, index) => {
                              return (
                                <Plan 
                                  key={plan.name}
                                  index={index}
                                  name={plan.name}
                                  price={plan.price}
                                  discount={optionActive}
                                  description={plan.description}
                                  handleSelectPlan={handleSelectPlan}
                                />
                              )
                            })
                          }
                        </Slider>
                      </> :
                      <>
                        {/** loading */}
                      </>
                    }
                  </div>
                </> :
                <>
                  <div className="plans__content">
                    {
                      status === 'success' ?
                      <>
                        {
                          filteredPlans.map((plan, index) => {
                            return (
                              <Plan 
                                key={plan.name}
                                index={index}
                                name={plan.name}
                                price={plan.price}
                                discount={optionActive}
                                description={plan.description}
                                handleSelectPlan={handleSelectPlan}
                              />
                            )
                          })
                        }
                      </> :
                      <>
                        {/** loading */}
                      </>
                    }
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Home.propTypes = {
  userObj: PropTypes.object
}