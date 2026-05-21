import { Comment } from '../../../../types';

interface Props {
  comment: Comment;
}

export default function CommentListItem({ comment }: Props) {
  return (
    <li className="flex flex-col not-first:mt-4">
      <span className="text-lg">{comment.username}</span>
      <p className="mt-1">{comment.text}</p>
    </li>
  );
}
