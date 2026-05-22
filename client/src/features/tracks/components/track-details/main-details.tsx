'use client';

import Header from '@/components/ui/header';
import CreateCommentForm from './main-details/create-comment-form';
import CommentList from './main-details/comment-list';
import useTrackByIdQuery from '../../hooks/useTrackByIdQuery';
import ServerImage from '@/components/server-image';

interface Props {
  id: string;
}

export default function MainDetails({ id }: Props) {
  const { data: track, isLoading } = useTrackByIdQuery(id);

  if (!track) {
    return null;
  }

  if (isLoading) {
    // TODO: Provide proper skeleton
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-nowrap gap-4">
        <ServerImage
          width={256}
          height={256}
          src={track.picture}
          alt={`${track.name} track image`}
        />
        <div className="flex flex-col gap-2">
          <Header type="h1">Track name: {track.name}</Header>
          <Header type="h2">Artist: {track.artist}</Header>
          <Header type="h3">Listens: {track.listens}</Header>
        </div>
      </div>
      <div>
        <article className="flex flex-col gap-2">
          <Header type="h2">Text:</Header>
          <p className="text-lg">{track.text}</p>
        </article>
      </div>
      <CreateCommentForm id={id} />
      {!!track.comments.length && <CommentList comments={track.comments} />}
    </>
  );
}
