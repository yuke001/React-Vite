// Categories.jsx
import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
        <div className='categories-container'>
          <div className='categories-header'>
            <h2 className='categories-title'>Grocery & Kitchen</h2>
            <a href='#' className='categories-seeAll'> See All  </a>
          </div>

          <div className='category-items'>
             <div className='category-item'>
                 <img src='/images/fruits.webp' alt='Fruits & Vegetables' />
                 <p>Fruits & Vegetables</p>
             </div>
              <div className='category-item'>
                 <img src='/images/dairyProducts.webp' alt='Dairy, Bread & Eggs' />
                 <p>Dairy, Bread & Eggs</p>
             </div>
              <div className='category-item'>
                <img src='/images/Atta.webp' alt='Atta, Rice, Oil & Dals' />
                 <p>Atta, Rice, Oil & Dals</p>
              </div>
               <div className='category-item'>
                <img src='/images/Meats Fish.webp' alt='Meats, Fish & Eggs' />
                 <p>Meats, Fish & Eggs</p>
              </div>
                <div className='category-item'>
                 <img src='/images/Masala.webp' />
                 <p>Masala & Dry Fruits</p>
              </div>
              <div className='category-item'>
                <img src='/images/BreakFast.webp' alt='Breakfast & Sauces' />
                 <p>Breakfast & Sauces</p>
              </div>
                <div className='category-item'>
                 <img src='/images/pakedFood.webp' alt='Packaged Food' />
                 <p>Packaged Food</p>
              </div>
          </div>
        </div>
  );
};

export default Categories;