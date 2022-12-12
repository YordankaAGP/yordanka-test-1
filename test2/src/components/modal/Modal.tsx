import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export type ModalProps = {
	isActive: boolean
	onClose: () => void
} & HTMLAttributes<HTMLDivElement>

function Modal(props: ModalProps) {
	const { isActive, onClose, children, className } = props
	return (
		<div
			className={clsx('z-[60] fixed inset-0 transition-opacity', {
				'translate-x-0 opacity-100': isActive,
				'translate-x-full opacity-0': !isActive,
			})}>
			<div className='absolute inset-0 bg-slate-800 opacity-40' onClick={() => onClose()} />
			<div
				className={clsx(
					'absolute bg-white shadow-xl p-6 rounded-lg min-w-[85%] sm:min-w-[50%] lg:min-w-[35%] top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2',
					className
				)}>
				{children}
			</div>
		</div>
	)
}

export default Modal
