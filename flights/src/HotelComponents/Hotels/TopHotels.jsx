import React from "react";
import santorini from '../../assets/santorini.jpg'
import maldives_1 from '../../assets/maldives_1.jpg'
import rexosdubai from '../../assets/rexos dubai.jpg'
import chedi from '../../assets/chedi.jpg'
const TopHotels = () => {
  return (
    <div className='travelers container section'>
      <h2>Discover</h2>
      <div className='sectionContainer'>
        <div className='travelersContainer grid'>
          {/* Single Passenger Card */}
          <div className='singleTraveler'>
            <img src={santorini} className='destinationImage'></img>
            <div className='travelersDetails'>
              <div className='travelerName' onClick={()=>window.open('https://www.google.com/travel/hotels/entity/CgsI__-g_N_vhoOJARAB?q=Santorini%20greece%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4291517%2C4597339%2C4757164%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C4990494%2C72277293%2C72298667%2C72302247%2C72317059%2C72406588%2C72408739%2C72412680%2C72414906%2C72440516%2C72442338%2C72445425%2C72448521&hl=en-PK&gl=pk&cs=1&ssta=1&ts=CAESCAoCCAMKAggDGh4SHBIUCgcI5w8QDBgMEgcI5w8QDBgNGAEyBAgAEAAqBwoFOgNQS1I&qs=CAE4CkIJCf8_iP99GwaJQgkJbnmdvvRKqHJCCQk2_jvNVrcwZ1oCCAE&ap=aAE&ictx=1&sa=X&ved=2ahUKEwiX4IGY5v-CAxXDZEECHS1lD3IQvukIegQIAxAC','_blank')}>
                <span>Santorini Caves</span>
               
              </div>
            </div>
          </div>

          {/* Single Passenger Card */}
          <div className='singleTraveler'>
            <img src={maldives_1} className='destinationImage'></img>
            <div className='travelersDetails'>
              <div className='travelerName' onClick={()=>window.open('https://www.google.com/travel/hotels/entity/ChoQsbjVwMbG_Oy_ARoNL2cvMTFzc2djNWpqcxAC?q=maldives%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4291517%2C4597339%2C4757164%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C4990494%2C72277293%2C72298667%2C72302247%2C72317059%2C72406588%2C72408739%2C72412680%2C72414906%2C72440516%2C72442338%2C72445425%2C72448521&hl=en-PK&gl=pk&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaUwozEjEyJTB4MjRiNTk5YmZhYWZiN2JiZDoweDQxNDUwOWUxODE5NTYyODk6CE1hbGRpdmVzEhwSFAoHCOcPEAwYDBIHCOcPEAwYDRgBMgQIABAAKgcKBToDUEtS&qs=CAAgACgAOA1IAA&ap=KigKEgliJMz9HWz4vxE2nDI3qaJRQBISCfeHVOrrih9AETacMjcV-VJAMABoAQ&ictx=1&sa=X&ved=0CAAQvukIahgKEwjwx4ma5v-CAxUAAAAAHQAAAAAQjQE','_blank')}>
                <span>Maldives Villas</span>
                
              </div>
            </div>
          </div>

          {/* Single Passenger Card */}
          <div className='singleTraveler'>
            <img src={rexosdubai}  className='destinationImage'></img>
            <div className='travelersDetails'>
              <div className='travelerName' onClick={()=>window.open('https://www.google.com/travel/hotels/entity/ChgIg7Og-IKE6712GgwvZy8xaGMxNWZxc3kQAQ?q=Dubai%20luxury%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4291517%2C4597339%2C4757164%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C4990494%2C72277293%2C72298667%2C72302247%2C72317059%2C72406588%2C72408739%2C72412680%2C72414906%2C72440516%2C72442338%2C72445425%2C72448521&hl=en-PK&gl=pk&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaNAoUEhIKCS9tLzAxZjA4cjoFRHViYWkSHBIUCgcI5w8QDBgMEgcI5w8QDBgNGAEyBAgAEAAqCwoJEgIEBToDUEtS&qs=CAAgACgAOA1IAA&ap=KigKEgnVmx54EuM4QBGz7Dh0NIZLQBISCRLAJpi_azlAEbPsOPQBsUtAMABoAQ&ictx=1&sa=X&ved=0CAAQvukIahgKEwjwx4ma5v-CAxUAAAAAHQAAAAAQgAI','_blank')} >
                <span>Rexos Dubai</span>
              </div>
            </div>
          </div>

          {/* Single Passenger Card */}
          <div className='singleTraveler'>
            <img src={chedi} className='destinationImage'></img>
            <div className='travelersDetails'>
              <div className='travelerName' onClick={()=>window.open('https://www.google.com/travel/hotels/entity/ChgIqbj6wuGKgvJJGgwvZy8xcHAydF8wMDgQAQ?q=switzerland%20hotels&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4291517%2C4597339%2C4757164%2C4814050%2C4874190%2C4893075%2C4924070%2C4965990%2C4990494%2C72277293%2C72298667%2C72302247%2C72317059%2C72406588%2C72408739%2C72412680%2C72414906%2C72440516%2C72442338%2C72445425%2C72448521&hl=en-PK&gl=pk&cs=1&ssta=1&ts=CAESCgoCCAMKAggDEAAaVgo2EjQyJTB4NDc4YzY0ZWY2ZjU5NmQ2MToweDVjNTZiNTExMGZjYjdiMTU6C1N3aXR6ZXJsYW5kEhwSFAoHCOcPEAwYDBIHCOcPEAwYDRgBMgQIABAAKgsKCRICBAU6A1BLUg&qs=CAAgACgAOA1IAA&ap=KigKEgmaY6g93LVFQBG2OeroWEcVQBISCfIJwuiU8UhAEdscdXQMVyVAMABoAQ&ictx=1&sa=X&ved=0CAAQvukIahgKEwjwx4ma5v-CAxUAAAAAHQAAAAAQoQM','_blank')}>
                <span>Chedi Andermatt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHotels;
