import { Modal } from 'components/Modal/Modal';
import {
  ImageGalleryItemItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
//import { Component } from 'react';
import { useState } from 'react';

export const ImageGalleryItem = ({item}) => {

const [isOpen, setIsOpen] = useState(false);

const toggleModal = (_) => {
  setIsOpen(prevState => !isOpen);
}

  return (
    <ImageGalleryItemItem>
      <ImageGalleryItemImage
        src={item.webformatURL}
        alt=""
        onClick={toggleModal}
      />
      {isOpen && (
        <Modal onClick={toggleModal} modalImg={item.largeImageURL} />
      )}
    </ImageGalleryItemItem>
  );
};