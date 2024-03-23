import React from 'react';

interface Props {

}

const Overlay: React.FC<Props> = (props) => {
  return (
    <div
      className="opacity-0 group-hover:opacity-50 transition-opacity h-full w-full bg-black"
    />
  );
}

export default Overlay;
