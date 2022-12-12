import clsx from 'clsx'

type Variants = 'dark' | 'light'
type Props = {
	title: string
	subtitle: string
	items: string[]
	variant: Variants
} & React.HTMLAttributes<HTMLDivElement>

const containerStyle: { [key in Variants]: string } = {
	dark: 'bg-slate-900 text-white',
	light: 'bg-white text-black',
}

const itemStyle: { [key in Variants]: string } = {
	dark: 'bg-slate-500',
	light: 'bg-slate-800',
}

function Card(props: Props) {
	const { title, subtitle, items, variant, className } = props
	return (
		<div
			className={clsx(
				'p-6 lg:p-9 rounded-md shadow-xl inline-block',
				containerStyle[variant],
				className
			)}>
			<h2 className='mb-2 text-xl md:text-2xl lg:text-3xl font-semibold'>{title}</h2>
			<h3 className='mb-6 md:text-lg lg:text-xl'>{subtitle}</h3>
			<ul>
				{items.map((i) => (
					<li
						className={clsx('py-2 px-4 rounded-md bg-opacity-25 mb-5', itemStyle[variant])}
						key={i}>
						{i}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Card
