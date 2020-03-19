import React from 'react';
import { useDispatch } from 'react-redux';
import { closeImage } from '../../../../../store/actions/imageAction';
import './ButtonClose.css';

export const ButtonClose = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(closeImage());
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