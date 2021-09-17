import React from 'react'
import Kitchen from '../Components/Kitchen';
import LivingRoom from '../Components/LivingRoom';
import Bedroom from '../Components/Bedroom';
import Bath from '../Components/Bath';
import '../CSS/floorplan.css'


export default function FloorPlan() {
  return (
    <div className='main_FP_container'>
     
    <div className='firstRow'>     
       <div className='full_1bed'>
      <Bedroom bedNum = {1}/>
      <Bath size={"Full"}/>
      </div>
      <LivingRoom />

      <Kitchen />
      </div>

      <div className='secondRow'>
      <Bedroom bedNum = {2}/>
      <Bath size={"Half"}/>
      <Bedroom bedNum = {3}/>
      </div>

    </div>
  )
}
