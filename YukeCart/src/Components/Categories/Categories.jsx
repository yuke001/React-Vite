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
                 <img src='https://static.vecteezy.com/system/resources/thumbnails/008/315/196/original/vegetables-and-fruits-in-wicker-basket-isolated-illustration-vector.jpg' alt='Fruits & Vegetables' />
                 <p>Fruits & Vegetables</p>
             </div>
              <div className='category-item'>
                 <img src='https://m.media-amazon.com/images/I/81kG544uGgL._AC_UF1000,1000_QL80_.jpg' alt='Dairy, Bread & Eggs' />
                 <p>Dairy, Bread & Eggs</p>
             </div>
              <div className='category-item'>
                <img src='https://5.imimg.com/data5/SELLER/Default/2023/1/OY/LY/HD/8771105/aashirvaad-atta-10-kg-500x500.png' alt='Atta, Rice, Oil & Dals' />
                 <p>Atta, Rice, Oil & Dals</p>
              </div>
               <div className='category-item'>
                <img src='https://5.imimg.com/data5/SELLER/Default/2022/8/OV/IM/GL/10219642/raw-chicken-and-fish-500x500.jpeg' alt='Meats, Fish & Eggs' />
                 <p>Meats, Fish & Eggs</p>
              </div>
                <div className='category-item'>
                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-o3W977V1iZ9z9yW6oYnO_0y_5k2_m636n353mHq70G5dO9Q9-jI&usqp=CAE&s' alt='Masala & Dry Fruits' />
                 <p>Masala & Dry Fruits</p>
              </div>
              <div className='category-item'>
                <img src='https://m.media-amazon.com/images/I/71H53I-XUOL._AC_UF1000,1000_QL80_.jpg' alt='Breakfast & Sauces' />
                 <p>Breakfast & Sauces</p>
              </div>
                <div className='category-item'>
                 <img src='https://m.media-amazon.com/images/I/614oB3qZJlL._AC_UF1000,1000_QL80_.jpg' alt='Packaged Food' />
                 <p>Packaged Food</p>
              </div>
          </div>
        </div>
  );
};

export default Categories;