import { Loader } from 'lucide-react';
import * as React from 'react';

export interface ILoadingProps {
}

export function Loading (props: ILoadingProps) {
  return (
    <main
    className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center"
  >
    <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
    <InfoSkeleton />
    <ParticipantsSkeleton />
    <ToolbarSkeleton />
  </main>
  );
}
