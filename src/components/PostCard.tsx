type CardProps = {
  title?: string;
  summary?: string;
};

const PostCard = ({ title, summary }: CardProps) => {
  return (
    <li className='p-2'>
      <h3 className='text-lg mb-2'>{title}</h3>
      <p className='text-sm'>{summary}</p>
      <p className='text-orange-500 text-sm mt-2'>Read More</p>
    </li>
  );
};

export default PostCard;
