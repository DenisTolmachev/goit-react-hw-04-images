import { useEffect } from 'react';
import { ModalBackdrop, ModalImg } from './Modal.styled';

export const Modal = ({modalImg, onClick}) => {

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const closeModal = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <ModalBackdrop onClick={closeModal}>
      <div>
        <ModalImg src={modalImg} alt="" />
      </div>
    </ModalBackdrop>
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.closeModal);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeModal);
//   }

//   closeModal = e => {
//     if (e.key === 'Escape' || e.target === e.currentTarget) {
//       this.props.onClick();
//     }
//   };

//   render() {
//     const { modalImg } = this.props;
//     return (
//       <ModalBackdrop onClick={this.closeModal}>
//         <div>
//           <ModalImg src={modalImg} alt="" />
//         </div>
//       </ModalBackdrop>
//     );
//   }
// }
