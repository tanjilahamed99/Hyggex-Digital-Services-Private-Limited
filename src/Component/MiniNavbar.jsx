import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

const MiniNavbar = () => {
    return (
        <div className="flex  items-center gap-2 my-10">
            <GoHome className="text-3xl"></GoHome>
            <IoIosArrowForward></IoIosArrowForward>
            <h2 className="">FishCard</h2>
            <IoIosArrowForward></IoIosArrowForward>
            <h2>MatheMatics</h2>
            <IoIosArrowForward></IoIosArrowForward>
            <h2>Relation and Function</h2>
        </div>
    );
};

export default MiniNavbar;