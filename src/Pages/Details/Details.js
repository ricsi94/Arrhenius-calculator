// Modules
import React from 'react'
import { motion } from 'framer-motion'
import equationimg from '../../assets/equation.png'
import lnkimg from '../../assets/lnk.png'
import mxbimg from '../../assets/mxb.png'
// Styles
import './Details.css'





export default function Details() {
  return (
    <motion.div className='wrapper'
      initial={ {opacity : 0} }
      animate={ {opacity: 1} }
      transition={ {duration: 0.75} }
    >
      <h2>Arrhenius equation</h2>
      <p>
        Svante Arrhenius formulated this equation in 1889 .
        Scientists using Arrhenius equation in physical chemistry , especially when they would like to determine the chemical kinetics.
      </p>
      <p>
        There are 2 formulas for this equation. One is with Boltzmann constant and the another one is with universal gas constant.
        On this website we use the formula with universal gas constant.
      </p>
      <img id="equation-img-details" src={equationimg} alt="equation" />
      <ul id='equation-list'>
        <li><span>k - rate constant</span></li>
        <li><span>T - absolute temperature ( Kelvin )</span></li>
        <li><span>k0 or A - pre-exponentian factor</span></li>
        <li><span>Ea - activation energy</span></li>
        <li><span>R - universal gas constant</span></li>
      </ul>
      <h2>Visualize the equation</h2>
      <p>If we take the natural logarithm of the Arrhenius equation and we visualize it , then we get an y = mx + b line.</p>
      <img id="lnk-img-details" src={lnkimg} alt="lnk equation" />
      <p>Rearranging :</p>
      <img id="mxb-img-details" src={mxbimg} alt="mxb equation" />
      <p>The gradient or slope of the line will be  -Ea/R.</p>
      <p>The intercept with the y axis will be ln(k0) or ln(A).</p>
    </motion.div>
  )
}
