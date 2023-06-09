import React from 'react'

interface ModalProp {
  onClose: () => void,
  children: React.ReactNode
}
const Modal: React.FC<ModalProp> = ({ children}) => {
  return (
     <div>
      <div className="starter">{ children }</div>
     </div>
  );
}


export default Modal
