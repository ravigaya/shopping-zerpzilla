import React from 'react';

const Categorycard = ({category}) => {
  return (
    <div style={{dispaly:'flex' ,alignContent :'center', alignItems :'center'}}>
    <div className="card" style={{ width: "18rem"  }}>
      <div className="card-body">
        <a href="#" className="btn btn-primary">{category}</a>
      </div>
    </div>
    </div>
  );
}

export default Categorycard;
