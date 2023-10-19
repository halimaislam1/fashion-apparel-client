import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const NavBar = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
          .then(result => {
            console.log(result.user);
          })
          .catch(error =>{
            console.error(error)
          })
    }

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addproduct'>Add product</NavLink></li>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>

    </>

    return (
        <div className="navbar bg-amber-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                
                <img className=' w-28 md:w-24  ' src="https://i.imgur.com/tPjfMBs.png" alt="" />
                <img className=' w-28 md:w-20  ' src="https://i.imgur.com/Geyd14x.png" alt="" />
                
                   
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                
                {
                    user ? 
                    <div className='flex items-center justify-center gap-3 '>
                        <p>{user.displayName}</p>
                        <img className='w-14 h-14 rounded-full' src={user.photoURL} alt="" />
                        <button onClick={handleSignOut} className="btn bg-black text-white">sign Out</button>
                    </div>
                    : 
                    <Link to='/login'>
                    <button className="btn bg-black text-white">Login</button>
                  </Link>
                }
            </div>
            
            {/* <div className='navbar-end '>
            <Link to='/login'><button className='bg-black px-4 py-2 rounded-lg text-white'>Login</button></Link> 
            </div> */}
               
        </div>
    );
};

export default NavBar;


