import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'

const HeaderOption = ({Icon, avatar, title, onClick}) => {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
{Icon && <Icon className="headerOption__Icon"/>}
{avatar && <Avatar className="headerOption__Icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>}
<h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}
export default HeaderOption