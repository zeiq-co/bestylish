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
          <li>{item.listIteam[0]}</li>
          <li>{item.listIteam[1]}</li>
          <li>{item.listIteam[2]}</li>
          <li>{item.listIteam[3]}</li>
          <li>{item.listIteam[4]}</li>
          <li>{item.listIteam[5]}</li>
          <li>{item.listIteam[6]}</li>
          <li>{item.listIteam[7]}</li>
          <li>{item.listIteam[8]}</li>
          <li>{item.listIteam[9]}</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default ServicesItem;
