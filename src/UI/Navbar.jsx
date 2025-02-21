import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 3, text: 'Resources', path: '/resources' },
    { id: 5, text: 'Donate', path: '/donate' },
    {id: 6, text: 'Blogs', path: '/blogs' },
  ];

  return (
    <div className='bg-gradient-to-r from-black via-gray-900 to-black flex justify-between items-center h-16 w-full px-6 text-white shadow-md fixed top-0 z-50'>
      <h1 className='text-3xl font-bold text-[#00df9a]'>Notesly</h1>
      <ul className='hidden md:flex gap-6'>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className='p-2 hover:bg-[#00df9a] rounded-lg cursor-pointer transition duration-300 hover:text-black'
            >
              {item.text}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href='https://github.com/your-repo-link'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 p-2 bg-[#00df9a] text-black font-semibold rounded-lg transition duration-300 hover:bg-[#00bf7a]'
          >
            <AiFillGithub size={20} /> Contribute
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <ul
        className={`fixed md:hidden left-0 top-0 w-2/3 h-full bg-[#000300] text-white transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out shadow-lg`}
      >
        <div className='flex justify-between items-center p-4 border-b border-gray-800'>
          <h1 className='text-3xl font-bold text-[#00df9a]'>Only Notes</h1>
          <AiOutlineClose size={24} className='cursor-pointer' onClick={handleNav} />
        </div>

        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              onClick={() => setNav(false)}
              className='block p-4 border-b border-gray-800 hover:bg-[#00df9a] hover:text-black transition duration-300 cursor-pointer'
            >
              {item.text}
            </Link>
          </li>
        ))}

        <li className='p-4'>
          <a
            href='https://github.com/your-repo-link'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 px-4 py-2 bg-[#00df9a] text-black font-semibold rounded-lg transition duration-300 hover:bg-[#00bf7a]'
          >
            <AiFillGithub size={20} /> Contribute
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
