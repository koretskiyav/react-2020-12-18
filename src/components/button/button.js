import React from 'react';
import cn from 'classnames';
import styles from './button.module.css';

import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as MinusIcon } from './icons/minus.svg';
import { ReactComponent as DeleteIcon } from './icons/delete.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
  delete: DeleteIcon,
};

const Button = ({
  icon,
  primary = false,
  secondary = false,
  small = false,
  block = false,
  children,
  ...props
}) => {
  const Icon = icons[icon];

  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.small]: small,
        [styles.block]: block,
      })}
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
