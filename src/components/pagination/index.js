import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagination() {
    return (
        <div className="pagination flex justify-center my-10 text-center">
            <span className="cursor-pointer w-[34px] px-3 py-2  hover:bg-primary hover:text-white rounded-sm">
               <FontAwesomeIcon icon={faAngleLeft}/>
            </span>
            <ul className="flex justify-center gap-x-2">
                <li className="cursor-pointer mx-auto w-[34px] hover:bg-primary hover:text-white px-3 py-2 rounded-sm  ">1</li>
                <li className="cursor-pointer w-[34px] hover:bg-primary hover:text-white px-3 py-2 rounded-sm current-page">2</li>
                <li className="cursor-pointer w-[34px] hover:bg-primary hover:text-white px-3 py-2 rounded-sm ">3</li>
            </ul>

            <span className="cursor-pointer w-[34px] px-3 py-2  hover:bg-primary hover:text-white rounded-sm">
            <FontAwesomeIcon icon={faAngleRight}/>
            </span>
        </div>
    );
}

export default Pagination;
