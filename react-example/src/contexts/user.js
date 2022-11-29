import React from "react"

export const user = {
  id: 1,
  name: 'Toan',
  email: 'ngquoctoan.02@gmail.com',
  school: 'vku'
}

export const UserContext = React.createContext(user.email)