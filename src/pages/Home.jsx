import Navbar from "../Component/Navbar"
import SignInModal from "../modal/SignInModal"
import SignUpModal from "../modal/SignUpModal"
import JamesGameModal from "../modal/JamesGameModal"
import ShowAllAnimals from "../Component/ShowAllAnimals"
import CharlyGameModal from "../modal/CharlyGameModal"
const Home = () => {
    return(
        <>
            <Navbar/>
            <SignInModal />
            <SignUpModal />
            <ShowAllAnimals />
            <JamesGameModal />
            <CharlyGameModal />
        </>
    )
}

export default Home