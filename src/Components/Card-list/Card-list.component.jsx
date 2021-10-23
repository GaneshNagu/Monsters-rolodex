import React from 'react';
import '../Card-list/Card-list.styles.css';

export const Cardlist = (props) => {

   return (
        
        <div className='card-list'>
          {
                props.monsters.map(monster => (
                    <div className='boxes' key={monster.id} >
                        <img className='imgclass' src={monster.image} alt='unknown' />
                        <p className="titleclass">{monster.title}</p>
                        <div class="tooltip">more Details
                            <span class="tooltiptext">{monster.description}</span>
                        </div>
                    </div>
                    ))
            }
        </div>
    
    )

}