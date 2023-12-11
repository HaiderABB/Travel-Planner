import React from "react";
import turkey from '../../assets/turkey.jpg'
import malaysia from '../../assets/malaysia.jpg'
import indonesia from '../../assets/indonesia.jpg'

const Support = () => {
  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className='titlesDiv'>
          <h2>Suggestions</h2>
        </div>

        <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div className='singleInfo' style={{width:'30%', marginLeft:'2%'}}>
              <span><img style={{width:'60px',height:'60px'}} src={turkey}></img></span>
              <h4>Turkey</h4>
              <p>
              A diverse and historically rich transcontinental nation.
              </p>
            </div>

            <div className='singleInfo' style={{marginLeft:'17%'}}>
              <span><img style={{width:'60px',height:'60px'}} src={malaysia}></img></span>
              <h4>Malaysia</h4>
              <p>
              Malaysia, in Southeast Asia, harmonizes cultural diversity with lush landscapes.
              </p>
            </div>

            <div className='singleInfo' style={{marginLeft:'10%'}}>
              <span><img style={{width:'60px',height:'60px'}} src={indonesia}></img></span>
              <h4>Indonesia</h4>
              <p>
            
Indonesia, a Southeast Asian archipelago, blends diverse islands, rich cultures, and modern progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
