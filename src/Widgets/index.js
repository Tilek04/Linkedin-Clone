import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const Widget = () => {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
<FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widget__header'>
        <h2>Linkedin News</h2>
        <InfoIcon/>
        </div>
       {newsArticle("Papa React is back", 'Top news - 9999 readers')}
       {newsArticle("Coronavirus: UK updates", 'Top news - 866 readers')}
       {newsArticle("Tesla hits new highs", 'Cars & auto - 300 readers')}
       {newsArticle("Is Readux too good?", 'Programming - 123 readers')}
       {newsArticle("Bitcoin Breaks $22k", 'Crypto - 8000 readers')}
    </div>
  )
}

export default Widget
