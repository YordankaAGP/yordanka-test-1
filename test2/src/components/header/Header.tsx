import clsx from 'clsx'
import { MenuCallbacksType, MenuType } from '../../pages/Main'
import Button from '../button/Button'

export type HeaderProps = {
	onBurgerClick: () => void
	onLoginClick: () => void
	menu: MenuType
	isScrolled?: boolean
	textColor?: string
	menuCallbacks: MenuCallbacksType
} & React.HTMLAttributes<HTMLDivElement>

function Header(props: HeaderProps) {
	const {
		onBurgerClick,
		onLoginClick,
		menu,
		isScrolled,
		textColor,
		className,
		menuCallbacks,
		...rest
	} = props
	return (
		<div
			className={clsx(
				'flex justify-between max-w-7xl mx-auto relative px-4 sm:px-8 py-4 w-full z-40',
				className
			)}
			{...rest}>
			<div className='flex items-center'>
				<button onClick={() => onBurgerClick()} className='w-11 sm:hidden bg-transparent mr-2'>
					<svg className='w-4 h-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
						<path
							fill='white'
							d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
						/>
					</svg>
				</button>
				<Button className='text-white px-2 hover:bg-transparent' variant='text'>
					LOGO
				</Button>

				<svg
					className={clsx(
						'absolute -top-40 -left-12 sm:-top-44 sm:-left-16 -z-20 w-72',
						isScrolled && 'hidden'
					)}
					viewBox='0 0 200 200'
					xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<linearGradient id='gradientLogo' gradientTransform='rotate(90)'>
							<stop offset='5%' stopColor='#1CF0C3' />
							<stop offset='95%' stopColor='#179BDE' />
						</linearGradient>
					</defs>
					<path
						fill="url('#gradientLogo')"
						d='M55.5,-50.5C72,-39.1,85.5,-19.5,83.4,-2.1C81.2,15.3,63.6,30.6,47.1,47.1C30.6,63.6,15.3,81.3,-3.1,84.3C-21.4,87.4,-42.8,75.8,-57.4,59.3C-72,42.8,-79.7,21.4,-80.4,-0.7C-81.1,-22.9,-74.9,-45.8,-60.3,-57.2C-45.8,-68.7,-22.9,-68.8,-1.7,-67.1C19.5,-65.5,39.1,-62,55.5,-50.5Z'
						transform='translate(100 100)'
					/>
				</svg>
			</div>
			<div>
				{menu.map((m) => (
					<Button
						key={m}
						onClick={menuCallbacks[m]}
						className={clsx('mr-4 hidden sm:inline-block bg-opacity-40 capitalize', {
							[`text-${textColor}`]: !!textColor,
						})}
						variant='text'>
						{m}
					</Button>
				))}
				<Button
					onClick={onLoginClick}
					className={clsx('ml-8 hidden sm:inline-block', { [`text-${textColor}`]: !!textColor })}
					variant='outlined'>
					Login
				</Button>
			</div>
		</div>
	)
}

export default Header
