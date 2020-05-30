import React from 'react';


const Dress = ({selectedArea, onAreaChange}) => {
    return (
        <div className={`dress-model dress-${selectedArea}`} >
            <div className='collar-area' onClick={() => onAreaChange(0)}/>
            <div className='arms-area' onClick={() => onAreaChange(1)}/>
            <div className='hip-area' onClick={() => onAreaChange(2)}/>
            <div className='width-area' onClick={() => onAreaChange(3)}/>
        </div>
    )
}

export default Dress;