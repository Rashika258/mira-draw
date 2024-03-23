import { RoomProvider } from "@/liveblocks.config";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import React, { ReactNode } from "react";
import { Layer } from "@/types/canvas";
import { ClientSideSuspense } from "@liveblocks/react";

interface Props {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

const Room: React.FC<Props> = (props) => {
  const { children, roomId, fallback } = props;
  return (
    <RoomProvider
      initialPresence={{
        cursor: null,
        selection: [],
        pencilDraft: null,
        penColor: null,
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
      id={roomId}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Room;
