import { NoteLayer } from '@/types/canvas';
import { useMutation } from 'convex/react';
import * as React from 'react';

export interface INoteProps {
    id: string;
    layer: NoteLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export default function Note (props: INoteProps) {
    const {  layer,
        onPointerDown,
        id,
        selectionColor,} = props;
        const { x, y, width, height, fill, value } = layer;

        const updateValue = useMutation((
          { storage },
          newValue: string,
        ) => {
          const liveLayers = storage.get("layers");
      
          liveLayers.get(id)?.set("value", newValue);
        }, []);
      
        const handleContentChange = (e: ContentEditableEvent) => {
          updateValue(e.target.value);
        };
      

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000",
      }}
      className="shadow-md drop-shadow-xl"
    >
      <ContentEditable
        html={value || "Text"}
        onChange={handleContentChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center outline-none",
          font.className
        )}
        style={{
          fontSize: calculateFontSize(width, height),
          color: fill ? getContrastingTextColor(fill) : "#000",
        }}
      />
    </foreignObject>
  );
}
