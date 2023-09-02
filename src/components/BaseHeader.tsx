import BaseNavigation from './BaseNavigation';

const BaseHeader = () => {
  return (
    <div className='flex justify-between pb-10'>
      <h1>My Astro Site</h1>
      <BaseNavigation />
    </div>
  );
};

export default BaseHeader;
