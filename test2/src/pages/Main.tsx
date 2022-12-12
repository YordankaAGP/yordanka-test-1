import { useEffect, useMemo, useRef, useState } from 'react'
import Header from '../components/header/Header'
import ScrolledHeader from '../components/header/ScrolledHeader'
import SlideMenu from '../components/header/SlideMenu'
import LoginModal from '../components/modal/LoginModal'
import { blockScroll } from '../utils/scroll'
import Home, { RefHandler } from './Home'

const menu = ['about', 'pricing', 'contact'] as const

export type MenuType = typeof menu

export type MenuCallbacksType = {
	[key in MenuType[number]]: () => void
}

function Main() {
	const [openMenu, setOpenMenu] = useState(false)
	const [openScrolledHeader, setOpenScrolledHeader] = useState(false)
	const [openLogin, setOpenLogin] = useState(false)
	const homeRef = useRef<RefHandler>(null)

	const menuCallbacks: MenuCallbacksType = useMemo(
		() => ({
			about: () => homeRef.current?.scrollTo(homeRef.current?.aboutRef),
			pricing: () => homeRef.current?.scrollTo(homeRef.current?.pricingRef),
			contact: () => homeRef.current?.scrollTo(homeRef.current?.contactRef),
		}),
		[homeRef.current]
	)

	const handleOpenMenu = () => {
		setOpenMenu(true)
		blockScroll(true)
	}
	const handleCloseMenu = () => {
		setOpenMenu(false)
		blockScroll(false)
	}

	const handleOpenLogin = () => {
		setOpenLogin(true)
		setOpenMenu(false)
		blockScroll(true)
	}
	const handleCloseLogin = () => {
		setOpenLogin(false)
		blockScroll(false)
	}

	const handleOpenScrolledHeader = () => {
		if (window.pageYOffset > 100) setOpenScrolledHeader(true)
		else setOpenScrolledHeader(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleOpenScrolledHeader, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleOpenScrolledHeader)
		}
	}, [])

	return (
		<>
			<LoginModal isActive={openLogin} onClose={handleCloseLogin} />
			<Header
				className='mb-36'
				menu={menu}
				onBurgerClick={handleOpenMenu}
				onLoginClick={handleOpenLogin}
				menuCallbacks={menuCallbacks}
			/>
			<ScrolledHeader
				isActive={openScrolledHeader}
				menu={menu}
				onBurgerClick={handleOpenMenu}
				onLoginClick={handleOpenLogin}
				menuCallbacks={menuCallbacks}
			/>
			<SlideMenu
				menu={menu}
				isActive={openMenu}
				onClose={handleCloseMenu}
				onLoginClick={handleOpenLogin}
				menuCallbacks={menuCallbacks}
			/>
			<div className='px-4 sm:px-8 mx-auto max-w-7xl'>
				<Home ref={homeRef} />
			</div>
		</>
	)
}

export default Main
