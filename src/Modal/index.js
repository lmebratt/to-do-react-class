import PortalReactDOM from 'react-dom';
import './Modal.css'

function Modal({ children }) {
    return PortalReactDOM.createPortal(
        <div className='modalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };