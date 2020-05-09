import React from 'react';
import { useDispatch } from 'react-redux';
import { closeImage } from '../../../../../store/actions/imageAction';
import './ButtonClose.css';

export const ButtonClose = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeImage());
    document.body.classList.remove('hidden');
  };

	return (
    <div
      className="ButtonClose"
      onClick={handleClick}
    >
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};