import React, { useEffect } from 'react'
import List from '../components/custom/list/List'
import Chat from '../components/custom/chat/Chat'
import Detail from '../components/custom/detail/Detail'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../lib/userStore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useChatStore } from '../lib/chatStore'
import { useMobileViewStore } from '../lib/mobileViewStore'
import AddUserModal from '../components/custom/list/chatList/AddUserModal'

const MainPage = () => {
	const navigate = useNavigate()
	const { chatId } = useChatStore()
	const { activeView } = useMobileViewStore()
	const { currentUser, isLoading, fetchUserInfo, clearUser } = useUserStore()
	useEffect(() => {

		const unSub = onAuthStateChanged(auth, async (user) => {
			if (user) {
				await fetchUserInfo(user?.uid)
			} else {
				clearUser()
			}
		})
		return unSub;

	}, [])

	useEffect(() => {
		const theme = localStorage.getItem('theme') || 'sunset'
		document.documentElement.setAttribute('data-theme', theme)
	}, [])



	if (isLoading) {
		return (
			<>
				<h1>Loading</h1>
			</>
		)
	}

	if (!currentUser) {
		return (
			<>
			<div className="flex flex-col  items-center justify-center min-h-screen min-w-[166vh] bg-gray-100">
					<div className="absolute top-6">
						<img
							src="https://d2lk14jtvqry1q.cloudfront.net/media/small_Alliance_School_of_Business_Alliance_University_a5564aee18_91fc66ea05_be5a6c3d1f_14d8f65007.png"
							alt="Alliance Logo"
							className="w-[500px] h-auto"
						/>
					</div>
					<h1 className="text-4xl font-extrabold text-gray-800 mt-20">
						Alliance Alumni Connect
					</h1>
					<p className="text-lg text-gray-600 mt-4">
						"Bridging the Past and Present, One Connection at a Time."
					</p>
					<button
						className="mt-6 w-40 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
						onClick={() => navigate('/signin')}
					>
						Sign in
					</button>
				</div>
			</>
		)
	}

	return (
		currentUser &&
		<div className="w-[100vw] h-[100vh] flex">
			{/* Desktop View */}
			<div className="hidden md:flex w-full">
				<List />
				{chatId && <Chat />}
				{chatId && <Detail />}
			</div>

			{/* Mobile View */}
			<div className="md:hidden w-full h-full">
				{activeView === 'list' && <List />}
				{activeView === 'chat' && chatId && <Chat />}
				{activeView === 'detail' && chatId && <Detail />}
			</div>
			<AddUserModal />

		</div>

	)
}

export default MainPage