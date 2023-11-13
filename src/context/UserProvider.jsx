import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react"
import { useQuery } from '@tanstack/react-query'
import { getUser } from '../hooks/useFetch'

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [userObj, setUserObj] = useState({})
  const { data } = useQuery({
    queryKey: ['userData'],
    queryFn: getUser
  })

  useEffect(() => {
    setUserObj({...data})
  }, [data])
  
  return (
    <UserContext.Provider value={[userObj, setUserObj]}>
      { children }
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.object
}