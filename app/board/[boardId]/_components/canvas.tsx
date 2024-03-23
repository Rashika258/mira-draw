import React, { useState } from 'react';
import {
    useStorage, useSelf, 
} from "@/liveblocks.config"

interface Props {
boardId: string
}

const MAX_LAYERS = 100;


const Canvas: React.FC<Props> = (props) => {
    const {boardId} = props;
    const layerIds = useStorage((root) => root.layerIds);
    const pencilDraft = useSelf((me) => me.presence.pencilDraft);
    const [canvasState, setCanvasState] = useState<CanvasState>({
      mode: CanvasMode.None,
    });
    const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
    const [lastUsedColor, setLastUsedColor] = useState<Color>({
      r: 0,
      g: 0,
      b: 0,
    });
    
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      
      <Info boardId={boardId} />

    </main>
  );
}

export default Canvas;
