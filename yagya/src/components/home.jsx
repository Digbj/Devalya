import havan from '../img/hawan.png'
const Home=()=>{
    return(
        <div className='flex items-center justify-around border h-screen'>
            <p className='font-sans text-4xl p-5 font-semibold text-center mx-10 drop-shadow-lg'>To Make Your Devotional Journey More Blissful. <span className='font-blod text-teal-300'>Devalaya </span> a Path to Spirituality</p>
            <img className='w-[60%] h-[60%] drop-shadow-2xl' src={havan} alt='havan'/>
        </div>
    )
}
export default Home;