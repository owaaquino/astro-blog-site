const BaseNavigation = () => {
  return (
    <nav className='flex'>
      <li className='list-none mr-2'>
        <a href='/'>Home</a>
      </li>

      <li className='list-none'>
        <a href='/about/'>About</a>
      </li>
    </nav>
  );
};

export default BaseNavigation;
