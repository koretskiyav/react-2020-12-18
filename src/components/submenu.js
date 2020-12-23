import React from 'react';
import { SUB_MENU } from '../constants';

function SubMenu(props) {
  const { handleBtn } = props;

  return (
    <div>
      <button data-menuitem={SUB_MENU.MENU} onClick={handleBtn}>
        menu
      </button>
      <button data-menuitem={SUB_MENU.REVIEWS} onClick={handleBtn}>
        reviews
      </button>
    </div>
  );
}

export default SubMenu;
