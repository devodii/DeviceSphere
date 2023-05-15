import React from 'react'

interface ModalProp {
    onClose: () => void,
    children: React.ReactNode
}

const CustomModal: React.FC<ModalProp> = ({ onClose, children }) => {
    const handleClodse = () => onClose()
  return (
    <div>
          { children }
          <button onClick={handleClodse}>Close</button>
    </div>
  )
}

export default CustomModal
