import logo from '../img/logo.png'
const NavBar=()=>{
    return(
        <div className='flex items-center justify-between font-sans mx-4 border border-b-black fixed w-[97%]'>
            <div>
                <img className='h-16 w-16' src={logo} alt="logo"/>
            </div>
            <p className='font-snas font-semibold font-sans text-3xl text-sky-400 '>Devalaya</p>
            <ul className='flex gap-5 font-medium font-sans text-sky-400 '>
                <li className='hover:underline hover:text-black cursor-pointer'>Home</li>
                <li className='hover:underline hover:text-black cursor-pointer'>Temple</li>
                <li className='hover:underline hover:text-black cursor-pointer'>Darshan</li>
                <li className='hover:underline hover:text-black cursor-pointer'>Pooja</li>
                <li className='hover:underline hover:text-black cursor-pointer'>Pandit</li>
                <li className='hover:underline hover:text-black cursor-pointer'>Contack US</li>
            </ul>
        </div>
    )
}
export default NavBar;