"use client";


import { useQuery } from 'convex/react';
import React from 'react';
import NewBoardButton from './new-board-button';
import BoardCard from './board-card';

interface Props {
    orgId: string;
    query: {
      search?: string;
      favorites?: string;
    };
}

const BoardList: React.FC<Props> = (props) => {

    const {orgId, query} = props

    const data = useQuery(api.boards.get, { 
        orgId,
        ...query,
      });


  return (
    <div>
    <h2 className="text-3xl">
      {query.favorites ? "Favorite boards" : "Team boards"}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
      <NewBoardButton orgId={orgId} />
      {data?.map((board) => (
        <BoardCard
          key={board._id}
          id={board._id}
          title={board.title}
          imageUrl={board.imageUrl}
          authorId={board.authorId}
          authorName={board.authorName}
          createdAt={board._creationTime}
          orgId={board.orgId}
          isFavorite={board.isFavorite}
        />
      ))}
    </div>
  </div>
  );
}

export default BoardList;
