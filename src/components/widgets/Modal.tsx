import { ReactNode } from 'react';

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-1/2">
				<div className="p-4">
					<button onClick={onClose} className="absolute top-4 right-4">
						Close
					</button>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
