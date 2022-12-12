import Modal, { ModalProps } from './Modal'

function LoginModal(props: ModalProps) {
	return (
		<Modal {...props}>
			<h2 className='text-lg font-semibold mb-6'>Login</h2>
			<div className='mb-6'>
				<input
					className='w-full block p-2 mb-4 rounded-md border border-blue-800'
					placeholder='Email'
				/>
				<input
					className='w-full block p-2 rounded-md border border-blue-800'
					placeholder='Password'
				/>
			</div>
			<button className='w-full'>Login</button>
		</Modal>
	)
}

export default LoginModal
