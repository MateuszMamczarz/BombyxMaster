import React from 'react';
import { Carousel } from 'antd';


const Dress = ({selectedArea, onAreaChange}) => {
    return (
        <Carousel effect="fade" dotsClass="dress-dots" className="dress-carousel">
            <div className={`dress-model dress-${selectedArea}`} >
                <div className='collar-area' onClick={() => onAreaChange(0)}/>
                <div className='arms-area' onClick={() => onAreaChange(1)}/>
                <div className='hip-area' onClick={() => onAreaChange(2)}/>
                <div className='width-area' onClick={() => onAreaChange(3)}/>
            </div>
            <div>2</div>
            <div>3</div>
        </Carousel>
    )
}

export default Dress;