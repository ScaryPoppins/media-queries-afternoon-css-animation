import React from 'react';
import './Services.css';



function Services() {
  return (
    <div className = 'services'>

    <section className = 'services-section'> 
        <div className='container-name'>SERVICES</div>
        <p className='container-description'>Lorem ipsum dolor sit amet consectetur.</p>
    </section>

    <section className = 'cards-section'>
        <div className = 'service-card'>
            <div className='service-card-image-container'>
            <img src='https://image.flaticon.com/icons/svg/126/126510.svg'
                 className='service-card-image'
            ></img>  
            </div> 
            <h1>E-Commerce</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>

        <div className = 'service-card'> 
            <div className='service-card-image-container'>
            <img src='https://image.flaticon.com/icons/svg/130/130258.svg'
                 className='service-card-image'
            ></img> 
            </div>  
            <h1>Responsive Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>

        <div className = 'service-card'> 
            <div className='service-card-image-container'>
            <img src='https://image.flaticon.com/icons/svg/481/481195.svg'
                 className='service-card-image'
            ></img>
            </div>   
             <h1>Web Security</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
    </section>

    </div>
  );
}

export default Services;