import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => (
  <div style={{ padding: '40px' }}>
    <h1>Thanks for the purchase! Your order has been successfully created.</h1>
    <p>
      <Link to="/">
        Back to shop
      </Link>
    </p>
  </div>
);

export default SuccessPage;
