import React from 'react'
import { useDarkModeContext } from '../context/DarkModeContext'
const AboutUs = () => {
  
  const {darkMode} = useDarkModeContext()

  return (
    <div className={`py-40 pt-60 px-20 duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className='text-3xl font-bold mb-5'>WE ARE ALL ABOUT SNEAKERS!</h1>
      <p>With more than 2500 stores across the world, Foot Locker is the leading global athletic footwear and apparel retailer. Our close partnerships with the ultimate top brands mean that we will constantly provide you with the best, most exclusive ranges of products there is. At Foot Locker, we live sneakers, we breathe sneakers, we dream sneakers… Sneakers are all we think about and nothing makes us more proud than being able to keep our followers up to date with the latest trends.

For more than 30 years, our collections have been curated by sneaker heads for sneaker heads. Only the best, most relevant and exciting products ever make it onto our shelves and onto our online catalogues. “If it is at Foot locker, then it is approved!” This is the word on the street. Whether you are a long time dedicated sneaker lover or casually searching for a fresh new pair of shoes, Foot Locker has you covered, from the feet up. Don’t forget to peek into our fantastic range of apparel and accessories too! And keep in mind: most of our products you won’t be able to find anywhere else!</p>
    </div>
  )
}

export default AboutUs