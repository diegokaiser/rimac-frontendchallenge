import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import ImgLoginBanner from './../../assets/images/login_banner.png'
import ImgLoginBannerMobile from './../../assets/images/login_banner-mobile.png'
import IcoCheckbox from './../../assets/images/icons/checkbox.svg'
import { Header } from '../templates/Header'
import { Footer } from '../templates/Footer'

export function Login () {
  const [userObj, setUserObj] = useContext(UserContext)
  const navigate = useNavigate()

  const [typeDoc, setTypeDoc] = useState('')
  const [nroDoc, setNroDoc] = useState('')
  const [nroCel, setNroCel] = useState('')
  const [privacyPolicy, setPrivacyPolicy] = useState(false)
  const [commPolicy, setCommPolicy] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const handleLogin = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!typeDoc) validationErrors.typeDoc = "Por favor, seleccione un tipo de documento"
    if(!nroDoc.trim()) {
      validationErrors.nroDoc = "Por favor, ingresa tu número de documento"
    } else if (!/\d{8}/.test(nroDoc)) {
      validationErrors.nroDoc = "Por favor ingresa un numero de documento válido"
    }
    if(!nroCel.trim()) {
      validationErrors.nroCel = "Por favor, ingresa tu número celular"
    } else if (!/^(9)\d{8}/.test(nroCel)) {
      validationErrors.nroCel = "Por favor, ingresa un número celular válido"
    }
    if(!privacyPolicy) validationErrors.privacyPolicy = "Campo obligatorio"
    if(!commPolicy) validationErrors.commPolicy = "Campo obligatorio"

    setFormErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0) {
      navigate('/cotiza')
      setUserObj({
        ...userObj,
        dni: nroDoc,
        cel: nroCel
      })
    }
  }

  return (
    <>
      <Header page={'log'} />
      <div className="login">
        <div className="container">
          <div className="login__content">
            <div className="login__banner">
              <div className="banner__text">
                <span className='badge'>Seguro Salud Flexible</span>
                <h2>Creado para ti y tu familia</h2>
              </div>
              <img className='d-desktop' src={ImgLoginBanner} alt="Creado para ti y tu familia" />
              <img className='d-mobile' src={ImgLoginBannerMobile} alt="Creado para ti y tu familia" />
            </div>
            <div className="login__form">
              <div className="form__text">
                <span className='badge'>Seguro Salud Flexible</span>
                <h2>Creado para ti y tu familia</h2>
                <p>Tu eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online</p>
              </div>
              <form 
                autoComplete='off'
                onSubmit={handleLogin}
              >
                <div className="input__group">
                  <div className="select__content">
                    <select
                      onChange={e => setTypeDoc(e.target.value)}
                    >
                      <option value="seleccione">Seleccione</option>
                      <option value="dni">DNI</option>
                      <option value="ce">Carnet de extranjería</option>
                    </select>
                  </div>
                  <div className={`input__content`}>
                    <input 
                      type="text" 
                      id='doc' 
                      placeholder='Nro. de documento' 
                      pattern='\d*'
                      maxLength={8}
                      onChange={(e) => setNroDoc(e.target.value)}
                    />
                    <label htmlFor="doc">Nro. de documento</label>
                  </div>
                </div>
                {
                  formErrors.typeDoc || formErrors.nroDoc ?
                  <div className="error__group">
                    <div className="error__field">
                      {
                        formErrors.typeDoc && <span className='error__field'>{formErrors.typeDoc}</span>
                      }
                    </div>
                    <div className="error__field">
                      {
                        formErrors.nroDoc && <span className='error__field'>{formErrors.nroDoc}</span>
                      }
                    </div>
                  </div> :
                  <></>
                }
                <div className="input__field">
                  <div className={`input__content`}>
                    <input 
                      type="text" 
                      id='cel' 
                      placeholder='Celular' 
                      pattern='\d*'
                      maxLength={9}
                      onChange={(e) => setNroCel(e.target.value)}
                    />
                    <label htmlFor="cel">Celular</label>
                  </div>
                  {
                    formErrors.nroCel && <span className='error__field'>{formErrors.nroCel}</span>
                  }
                </div>
                <div className="input__field">
                  <label className='label'>
                    <span className="checkbox">
                      <input 
                        type="checkbox" 
                        onChange={(e) => setPrivacyPolicy(e.target.value)}
                      />
                      <span>
                        <img src={IcoCheckbox} alt="check!" />
                      </span>
                    </span>
                     Acepto la Política de Privacidad
                  </label>
                </div>
                {
                  formErrors.privacyPolicy && <span className="error__field">{formErrors.privacyPolicy}</span>
                }
                <div className="input__field">
                  <label className='label'>
                    <span className="checkbox">
                      <input 
                        type="checkbox" 
                        onChange={(e) => setCommPolicy(e.target.value)}
                      />
                      <span>
                        <img src={IcoCheckbox} alt="check!" />
                      </span>
                    </span> 
                    Acepto la Política de Comunicaciones Comerciales
                  </label>
                </div>
                {
                  formErrors.commPolicy && <span className="error__field">{formErrors.commPolicy}</span>
                }
                <div className="input__field">
                  <a href="#">Aplican Términos y Condiciones.</a>
                </div>
                <div className="input__field">
                  <button
                    className='btn btn-primary'
                  >
                    Cotiza aquí
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}