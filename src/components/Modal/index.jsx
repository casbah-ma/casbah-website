import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CloseButton, TopWrapper } from './Modal.styles';
import Close from '../Icons/Close';
import Casbah from '../Icons/Casbah';

function Modal({ children, isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        data-testid="modal-container"
        as="div"
        className="dialog"
        onClose={closeModal}
        style={{ zIndex: 60 }}
      >
        <Transition.Child
          as={Fragment}
          enter="enter"
          enterFrom="enter-from"
          enterTo="enter-to"
          leave="leave"
          leaveFrom="leave-from"
          leaveTo="leave-to"
        >
          <Dialog.Panel className="dialog-panel">
            <TopWrapper>
              <Casbah />
              <CloseButton onClick={closeModal}>
                <Close />
              </CloseButton>
            </TopWrapper>
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Modal;
