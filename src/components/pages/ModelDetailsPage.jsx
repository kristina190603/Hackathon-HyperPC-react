import React from 'react';
import ModelDetails from "../Models/ModelDetails"
import "../pages/ModelDetailsPage.css"
const ModelDetailsPage = () => {
    return (
        <div>
            <img className='imgbackModelDetails' src="https://hyperpc.ru/images/product/cyber/performance/hpc-cyber-rear-io-block_webp.jpg" alt="" />
            <ModelDetails/>
        </div>
    );
};

export default ModelDetailsPage;