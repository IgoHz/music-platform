import { TrackDetails } from "@/features/tracks";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function TrackDetailsModalPage({ params }: Props) {
  const { id } = await params;

  return (
    <TrackDetails id={id} type="modal" />
  );
}