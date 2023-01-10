import React from 'react';
import AddModels from '../Models/AddModels';
import "../pages/AdminPage.css"
const AdminPage = () => {
    return (
        <div>
            <AddModels/>
            <img className='backAdmin' src="https://hyperpc.ru/images/product/cyber/gallery/hpc-cyber-gallery-black-alt.jpg" alt="" />
        </div>
    );
};

export default AdminPage;