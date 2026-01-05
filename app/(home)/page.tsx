import { onBoardUser } from '@/modules/auth/actions'
import React from 'react'

const HomePage =async() => {
  await onBoardUser()
  return ( 
    <div>HOmePage</div>
  )     
}

export default HomePage