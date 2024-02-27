import React from 'react';
import logo from '../image/tide.jpg';
import '../components/home.css';

function Products() {
  const list = [
    {
      name: 'Tide Powder',
      description: 'Tide is an American brand of laundry detergent manufactured and marketed by Procter & Gamble. Introduced in 1946, it is the highest-selling detergent brand in the world.',
    },
    {
      name: 'Tide Powder',
      description: 'Tide is an American brand of laundry detergent manufactured and marketed by Procter & Gamble. Introduced in 1946, it is the highest-selling detergent brand in the world.',
    },
  ];

  return (
    <>
      <div className="container">
        <div className="card">
          <ul className="product-list">
            <h3 className="ecommerce-heading">ECommerce</h3>
            {list.map((content, index) => (
              <li key={index}>
                <div className="product">
                  <div className="product-image">
                    <img src={logo} alt={`Product ${index + 1}`} />
                  </div>
                  <div className="product-imformation">
                    <h4>{content.name}</h4>
                    <div className="specification">
                      <span>{content.description}</span>
                      <small className="line"></small>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Products;
