import React from 'react';

const Categorycard = ({category}) => {
  return (
    <div  style={{padding:'10px'}}>
    <div className="card" style={{ width: "18rem"  }}>
      <div className="card-body">
        <button className='btn-solid'>
              {category}
        </button>
        
      </div>
    </div>
    </div>
  );
}

export default Categorycard;
