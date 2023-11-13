import PropTypes from 'prop-types'
import { createContext, useState } from "react"

export const PlanContext = createContext(null)

export const PlanProvider = ({ children }) => {
  const [planObj, setPlanObj] = useState({})

  return (
    <PlanContext.Provider value={[planObj, setPlanObj]}>
      { children }
    </PlanContext.Provider>
  )
}

PlanProvider.propTypes = {
  children: PropTypes.object
}