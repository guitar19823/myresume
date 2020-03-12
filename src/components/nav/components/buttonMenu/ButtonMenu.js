import React from 'react';
import './ButtonMenu.css';

export const ButtonMenu = props => {
  const cls = ['Button'];

  if (props.navState) {
    cls.push('button_close');
  } else {
    cls.push('button_menu');
  }

	return (
		<div className={cls.join(' ')} onClick={props.toggleClick}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};