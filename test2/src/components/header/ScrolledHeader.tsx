import clsx from 'clsx'
import Header, { HeaderProps } from './Header'

type Props = {
	isActive: boolean
} & HeaderProps

function ScrolledHeader(props: Props) {
	const { isActive, ...headerProps } = props
	return (
		<div
			className={clsx(
				'z-40 shadow-md fixed bg-gradient-to-br from-teal-900 to-sky-900 top-0 inset-x-0 transition-transform duration-300 ease-out',
				{
					'-translate-y-full shadow-none': !isActive,
					'translate-y-0 shadow-lg': isActive,
				}
			)}>
			<Header {...headerProps} textColor='white' isScrolled />
		</div>
	)
}

export default ScrolledHeader
