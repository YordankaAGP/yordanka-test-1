import clsx from 'clsx'
import { MenuCallbacksType, MenuType } from '../../pages/Main'
import Button from '../button/Button'

type Props = {
	isActive: boolean
	onClose: () => void
	onLoginClick: () => void
	menu: MenuType
	menuCallbacks: MenuCallbacksType
}

function SlideMenu(props: Props) {
	const { isActive, onClose, onLoginClick, menu, menuCallbacks } = props
	return (
		<>
			<div
				className={clsx('z-50 fixed bg-transparent inset-0', {
					'-translate-x-full': !isActive,
					'translate-x-0': isActive,
				})}
				onClick={() => onClose()}
			/>
			<div
				className={clsx(
					'z-50 p-4 flex flex-col justify-around bg-white shadow-lg fixed inset-y-0 left-0 w-1/2 sm:w-1/3 P-6 transition-transform ease-out duration-300',
					{
						'-translate-x-full': !isActive,
						'translate-x-0': isActive,
					}
				)}>
				<div>
					{menu.map((m) => (
						<Button
							key={m}
							onClick={() => {
								menuCallbacks[m]()
								onClose()
							}}
							className='capitalize py-5 block w-full'
							variant='text'>
							{m}
						</Button>
					))}
				</div>
				<Button onClick={onLoginClick} className='mt-auto block w-full' variant='outlined'>
					Login
				</Button>
			</div>
		</>
	)
}

export default SlideMenu
