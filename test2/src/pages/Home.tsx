import { forwardRef, RefObject, useImperativeHandle, useRef } from 'react'
import Card from '../components/card/Card'

export type RefHandler = {
	scrollTo: (arg1: RefObject<HTMLDivElement>) => void
	aboutRef: RefObject<HTMLDivElement>
	pricingRef: RefObject<HTMLDivElement>
	contactRef: RefObject<HTMLDivElement>
}

const basicPerks = ['Mencatat barang masuk', 'Mencatat barang keluar', 'Mencatat hasil keuntungan']
const businessPerks = [
	...basicPerks,
	'Dapat menganalisa hasil penjualan dengan chart',
	'Support 7x24 jam',
]
const entrepreneurPerks = [...businessPerks, 'Export data ke excel', 'AI prediksi penghasilan']

const Home = forwardRef<RefHandler, {}>((_, ref) => {
	const aboutRef = useRef<HTMLDivElement>(null)
	const pricingRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)

	useImperativeHandle(ref, () => ({
		aboutRef,
		pricingRef,
		contactRef,
		scrollTo: (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth' }),
	}))

	return (
		<>
			<div className='mb-32 scroll-mt-20' ref={aboutRef}>
				<h2 className='border-l-4 pl-3 py-1 border-cyan-700 text-3xl sm:text-4xl mb-10 font-semibold'>
					About
				</h2>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin odio id risus
				lacinia lacinia. Aenean a metus libero. Vestibulum pellentesque tortor at consequat
				interdum. Pellentesque sodales eros nec dui ultricies, vitae posuere justo feugiat.
				Phasellus vestibulum, magna in efficitur vestibulum, urna neque ullamcorper mi, ac iaculis
				arcu justo commodo turpis. Aenean placerat rhoncus suscipit. Quisque magna metus, elementum
				in neque at, iaculis volutpat nunc. Duis placerat erat non dolor tempor feugiat. Praesent
				mauris ex, pharetra sed felis at, varius volutpat mauris. Orci varius natoque penatibus et
				magnis dis parturient montes, nascetur ridiculus mus. Nulla quis ipsum vitae turpis
				consectetur sagittis eget vitae nunc. Vivamus sollicitudin eros vel mi dictum, sit amet
				porttitor tellus aliquam. Suspendisse potenti. Proin euismod sed arcu ut aliquam. Phasellus
				ac accumsan mauris. Quisque felis mi, fringilla vitae leo vitae, porttitor sagittis nibh.
				Suspendisse auctor augue eget erat sollicitudin commodo. Sed nibh ante, dignissim quis
				dapibus sit amet, porta a purus. In eu magna nec mi interdum rutrum non et ipsum. Nullam
				aliquam, quam eu accumsan sagittis, ante turpis vestibulum risus, sit amet volutpat augue
				est at lorem. In a congue turpis. Duis nec feugiat velit, tincidunt euismod quam. Phasellus
				rutrum nisl mauris, vel sagittis tellus posuere bibendum. Nulla facilisi. Nam et tortor
				pulvinar tellus ultricies laoreet vulputate a lacus. Duis risus ipsum, egestas a dapibus
				nec, pellentesque eget ex. Morbi nibh lorem, tempor id justo et, aliquam egestas metus.
				Aenean finibus, tortor vitae sodales sodales, felis odio sodales erat, vitae auctor nulla
				neque sit amet leo. Vivamus pellentesque egestas eros at sagittis. Maecenas eget nunc vel
				magna maximus eleifend ut vel ante. Quisque aliquam posuere tristique. Sed auctor sagittis
				metus nec convallis. Integer nec malesuada sapien. Integer imperdiet quam neque, vel
				tincidunt magna mattis sit amet. Pellentesque id tortor vehicula, pulvinar arcu vitae,
				viverra nibh. Nunc placerat eu mauris in vestibulum. Ut sed scelerisque ipsum, at laoreet
				ligula. Aliquam luctus dolor metus. Proin et elit sit amet massa fringilla mattis. Donec ut
				augue a mi lacinia facilisis id dapibus purus. Pellentesque nec nisl id leo imperdiet
				mollis. Aenean vulputate id sem sit amet mollis. Fusce interdum, orci id fringilla
				vestibulum, felis libero aliquam purus, vel condimentum justo metus id justo. Pellentesque
				sit amet nibh porttitor, ultricies sapien ut, condimentum ligula. Integer fermentum sapien
				velit, nec tincidunt massa elementum sit amet. Sed tincidunt eros id justo hendrerit, quis
				laoreet urna aliquet. Sed augue mi, pharetra quis urna et, volutpat sodales metus. Cras
				lorem felis, mattis sit amet euismod quis, suscipit vitae magna. Nulla ullamcorper diam a
				lacus tristique, ac tempus ligula porta. Vivamus tincidunt metus nulla, nec mattis ex
				dignissim consectetur. Morbi facilisis ipsum eros, vitae mattis arcu dictum at. Mauris id
				magna semper dolor ullamcorper elementum. Vivamus non diam ut odio rhoncus interdum id ac
				nibh. Duis volutpat, nisl quis commodo semper, magna diam scelerisque elit, sit amet dictum
				quam lectus non erat. Fusce facilisis, lectus sit amet mattis aliquam, ex sem pharetra ante,
				eget porta leo lorem et massa. Maecenas non fringilla nisl. Duis iaculis quam nec erat
				ultricies congue. Sed at massa mollis, tempus nisi a, molestie mauris.
			</div>
			<div className='mb-32 scroll-mt-20' ref={pricingRef}>
				<h2 className='border-l-4 pl-3 py-1 border-cyan-700 text-3xl sm:text-4xl mb-10 font-semibold'>
					Pricing
				</h2>
				<div className='flex flex-col sm:flex-row flex-wrap justify-between lg:items-end lg:justify-around'>
					<Card
						variant='dark'
						className='mb-4 lg:mb-0 sm:w-[49%] lg:w-[32%]'
						title='Basic'
						subtitle='Rp 100.000'
						items={basicPerks}
					/>
					<Card
						variant='dark'
						className='mb-4 lg:mb-0 sm:w-[49%] lg:w-[32%]'
						title='Business'
						subtitle='Rp 300.000'
						items={businessPerks}
					/>
					<Card
						variant='dark'
						className='mb-4 lg:mb-0 sm:w-[49%] lg:w-[32%] bg-gradient-to-br from-blue-900 via-cyan-900 to-green-900'
						title='Entrepreneur'
						subtitle='Rp 700.000'
						items={entrepreneurPerks}
					/>
				</div>
			</div>
			<div
				className='p-4 flex flex-col sm:flex-row sm:justify-between mb-32 scroll-mt-20'
				ref={contactRef}>
				<div className='w-full mb-12 sm:mb-0 sm:w-[48%]'>
					<h2 className='text-3xl mb-4 font-semibold'>Contact Us</h2>
					<p>Kami akan pastikan untuk segera membalas surat anda</p>
				</div>
				<div className='w-full sm:w-[48%]'>
					<div className='flex justify-between'>
						<input
							className='w-[49%] inline-block p-2 mb-4 rounded-md border border-blue-800'
							placeholder='Email'
						/>
						<input
							className='w-[49%] inline-block p-2 mb-4 rounded-md border border-blue-800'
							placeholder='Name'
						/>
					</div>

					<textarea className='w-full inline-block p-2 mb-4 rounded-md border border-blue-800'></textarea>
					<button className='w-full bg-cyan-900 text-white'>Contact</button>
				</div>
			</div>
		</>
	)
})

export default Home
