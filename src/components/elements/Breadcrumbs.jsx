import { useNavigate } from "react-router-dom"

export function Breadcrumbs () {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs__content">
          <button
            onClick={handleGoBack}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" transform="rotate(90 10 10)" stroke="#4F4FFF" strokeWidth="2"/>
              <path d="M7.55317 9.99998L10.8094 6.74686L11.6907 7.62811L9.32192 9.99998L11.6907 12.3719L10.8094 13.2531L7.55317 9.99998Z" fill="#4F4FFF"/>
            </svg>
            <span>Volver</span>
          </button>
        </div>
      </div>
    </div>
  )
}