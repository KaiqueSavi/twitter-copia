import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell, faBookmark, faEllipsisH, faEnvelope, faFeather, faFeatherAlt, faHashtag, faHome, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons"

const NavItem = ({icon, text}) => (
    <div className='flex items-center p-3 rounded-full cursor-pointer hover:bg-gray-600 transition duration-300'>
        <FontAwesomeIcon className="text-2xl mr-4" icon={icon} />
        <span className='text-xl hidden xl:inline'>{text}</span>
    </div>
)

export function Sidebar(){

    return(
        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-3xl m-4" />

            <nav>
                <NavItem icon={faHome} text='Home' />
                <NavItem icon={faHashtag} text='Explore' />
                <NavItem icon={faBell} text='Notifications' />
                <NavItem icon={faEnvelope} text='Messages' />
                <NavItem icon={faBookmark} text='Bookmarks' />
                <NavItem icon={faUserFriends} text='Communites' />
                <NavItem icon={faTwitter} text='Premium' />
                <NavItem icon={faUser} text='Profile' />
                <NavItem icon={faEllipsisH} text='More' />
            </nav>
            <button className='flex flex-row justify-center items-center font-bold px-4 py-3 mt-4 w-full bg-blue-400 rounded-full'>
                <FontAwesomeIcon icon={faFeatherAlt} className="text-white text-3xl m-4 inline xl:hidden" />
                <span className='hidden text-center xl:inline'>Twitter</span>
            </button>
        </div>
    )

}

export default Sidebar