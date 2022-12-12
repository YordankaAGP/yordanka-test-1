import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type Variants = 'outlined' | 'text'
type Props = {
	variant: Variants
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantStyle: { [key in Variants]: string } = {
	text: 'bg-transparent hover:bg-blue-500 hover:text-white',
	outlined: 'bg-transparent outline-2 outline-blue-600 hover:bg-blue-600 hover:text-white',
}

function Button(props: Props) {
	const { className, variant, ...rest } = props
	return (
		<button
			className={clsx(
				'rounded-md inline-block px-5 py-1.5 min-w-11 transition-[color_background-color_transform] ease-out',
				variantStyle[variant],
				className
			)}
			{...rest}
		/>
	)
}

export default Button
