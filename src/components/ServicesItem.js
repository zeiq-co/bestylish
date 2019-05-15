import React from 'react';

const ServicesItem = ({ item }) => (
  <div className="col-md-4 col-sm-6">
    <ul
      className="price-table style2 with_background"
      style={{
        backgroundSize: 'cover',
        // backgroundImage: `url(${item.bgImage === null ? '' : item.bgImage.file.url})`,
      }}
    >
      <li className="plan-name" style={{ backgroundColor: '#f5f5f59e' }}>
        <div>
          {item.category && <p>{item.category.title}</p>}
          <h3>{item.title}</h3>
        </div>
      </li>
      <li className="features-list">
        <ul>
          <li>Vestibulum eget elit sed</li>
          <li>Duis sit amet laoreet orci</li>
          <li>Aliquam non nulla volutpat venenatis</li>
          <li>Mauris consequat, neque</li>
          <li>Aliquam pharetra in eros sit amet</li>
        </ul>
      </li>
      <li className="plan-price" style={{ backgroundColor: '#f5f5f59e' }}>
        <p>
          <span className="grey">£{item.price}</span>
        </p>
        <a href="#" className="theme_button small_button margin_0">
          Gei it now
        </a>
      </li>
    </ul>
  </div>
);

export default ServicesItem;
