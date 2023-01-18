import React, { useState } from 'react';
import fakeData from '../../fakeData/products';
import './Shope.css'

const Shope = () => {
    console.log('test fakeData', fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h1>This is products</h1>
                <h3>{products.length}</h3>
                <ul>
                    {
                        products.map(pd => <li>{pd.name}</li>)
                    }

                </ul>
            </div>
            <div className='card-container'>
                <h3>This is card</h3>
            </div>

        </div>
    );
};

export default Shope;