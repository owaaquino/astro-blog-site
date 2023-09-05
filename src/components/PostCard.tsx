import type { Post } from '../sanity/post';

type CardProps = {
  details: Post;
};

const PostCard = ({ details }: CardProps) => {
  return (
    <li className='p-2'>
      <h3 className='text-lg mb-2'>{details.title}</h3>
      <p className='text-sm'>{details.summary}</p>
      <p className='text-orange-500 text-sm mt-2'>
        <a href={`/post/${details.slug.current}`}>Read More</a>
      </p>
    </li>
  );
};

export default PostCard;
