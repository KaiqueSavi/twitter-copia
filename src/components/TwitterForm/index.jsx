import { faCalendarAlt, faChartBar, faFilm, faImage, faMapMarkedAlt, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function handleSubmit({onTweet}) {
    
}

export function TwitterForm() {
  return (
    <div className="border-b border-gray-800 p-4">
        <textarea
          name=""
          className="w-full bg-transparent text-white text-xl resize-none outline-none"
          placeholder="What´s happening ?"
          id=""
        ></textarea>
        <div className='flex justify-between items-center px-4 mt-4'>
        <div className='flex space-x-4'>
            <FontAwesomeIcon icon={faImage} className="text-blue-400 cursor-pointer" />
            <FontAwesomeIcon icon={faFilm} className="text-blue-400 cursor-pointer" />
            <FontAwesomeIcon icon={faChartBar} className="text-blue-400 cursor-pointer" />
            <FontAwesomeIcon icon={faSmile} className="text-blue-400 cursor-pointer" />
            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 cursor-pointer" />
            <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-400 cursor-pointer" />
        </div>
        <button className='bg-blue-400 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-600 duration-300 transition' onClick={handleSubmit} >Tweet</button>
      </div>
      </div>
  );
}

export default TwitterForm;
