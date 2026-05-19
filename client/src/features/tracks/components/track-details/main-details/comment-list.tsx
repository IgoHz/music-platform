import Header from '@/components/ui/header';
import { Comment } from '../../../types';
import CommentListItem from './comment-list/comment-list-item';

interface Props {
  comments: Comment[];
}

export default function CommentList({ comments }: Props) {
  return (
    <article>
      <Header type="h2">Comments:</Header>
      <ul className="my-4">
        {comments.map((comment) => (
          <CommentListItem key={comment._id} comment={comment} />
        ))}
      </ul>
    </article>
  );
}
