import { MdOutlineLightbulb } from "react-icons/md";
import { VscUnmute } from "react-icons/vsc";
import { IoReloadOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RiFullscreenLine } from "react-icons/ri";


const MainContent = () => {
    return (
        <div>
            <h2 className="bg-gradient-to-t from-[#164EC0] to-[#06286E] inline-block text-transparent bg-clip-text text-3xl font-bold">Relation and Functions (MatheMatics)</h2>
            <div className="flex gap-10 justify-center my-5 mt-10">
                <p className="font-bold border-b-2 border-black">Study</p>
                <p>Quiz</p>
                <p>Test</p>
                <p>Game</p>
                <p>Other</p>
            </div>
            <div className="relative h-[300px] w-[600px] bg-gradient-to-t from-[#164EC0] to-[#06286E] rounded-3xl mx-auto mt-10">
                <MdOutlineLightbulb className="absolute text-white text-4xl top-7 left-7"></MdOutlineLightbulb>
                <VscUnmute className="absolute text-white text-4xl top-7 right-7"></VscUnmute>
                <div className="text-white font-bold flex justify-center mx-auto items-center text-3xl gap-5 pt-[140px]">
                    <p>9</p>
                    <p>+</p>
                    <p>6</p>
                    <p>+</p>
                    <p>7x</p>
                    <p>-</p>
                    <p>2x</p>
                    <p>-</p>
                    <p>3</p>
                </div>
            </div>
            <div className="flex justify-center mt-10 items-center gap-20 text-2xl font-bold">
                <IoReloadOutline className=""></IoReloadOutline>
                <div className="flex gap-10 items-center text-2xl font-bold">
                    <button className="btn text-white bg-gradient-to-t from-[#164EC0] p-4 to-[#06286E] rounded-full">
                        <IoIosArrowBack className="text-lg"></IoIosArrowBack>
                    </button>
                    <h2>
                        o1/10
                    </h2>
                    <button className="btn text-white bg-gradient-to-t from-[#164EC0] p-4 to-[#06286E] rounded-full">
                        <IoIosArrowForward ></IoIosArrowForward>
                    </button>
                </div>
                <h2 className="font-bold"><RiFullscreenLine></RiFullscreenLine></h2>
            </div>
        </div>
    );
};

export default MainContent;