import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonClose } from './components/buttonClose/ButtonClose';
import { openImage } from '../../../store/actions/imageAction';
import { portfolioImages } from '../../../images';
import './ImagePanel.css';

export const ImagePanel = ({ image }) => {
  const dispatch = useDispatch();
  const imageList = Object.keys(portfolioImages);
  const imageIndex = imageList.indexOf(image);

  useEffect(() => {
    const handleKeyPress = ({ keyCode }) => {
      keyCode === 37 && imageIndex && dispatch(openImage(imageList[imageIndex - 1]));
      keyCode === 39 && imageIndex < imageList.length - 1 && dispatch(openImage(imageList[imageIndex + 1]));
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [dispatch, imageIndex, imageList]);

  const handleClick = number => {
    number === 37 && imageIndex && dispatch(openImage(imageList[imageIndex - 1]));
    number === 39 && imageIndex < imageList.length - 1 && dispatch(openImage(imageList[imageIndex + 1]));
  };

  return (
    <figure className="ImagePanel">
      <div className="counter">
        <span>{`${imageIndex + 1} / ${imageList.length}`}</span>
      </div>

      <img src={portfolioImages[image]} alt="example" />

      <div
        className={`prev ${!imageIndex && 'dark'}`}
        onClick={() => handleClick(37)}
      ></div>

      <div
        className={`next ${imageIndex >= imageList.length - 1 && 'dark'}`}
        onClick={() => handleClick(39)}
      ></div>
      
      <ButtonClose />
    </figure>
  );
};