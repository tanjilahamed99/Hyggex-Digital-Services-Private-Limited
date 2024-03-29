
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className=" text-3xl font-bold">HyggeX</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex items-center gap-4">
                    <li><a>Home</a></li>
                    <li><a>FlackCard</a></li>
                    <li><a>Contact</a></li>
                    <li><a>FAQ</a></li>
                    <button className="btn bg-gradient-to-t from-[#164EC0] to-[#06286E] text-white rounded-2xl px-5">Login</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;