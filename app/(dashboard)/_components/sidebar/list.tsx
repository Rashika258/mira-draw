import { useOrganizationList } from "@clerk/nextjs";
import React from "react";
import Item from "./item";

interface Props {}

const List: React.FC<Props> = (props) => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  return (
    <ul className="space-y-4">
      {userMemberships?.data?.map((member) => (
        <Item
          key={member.organization.id}
          id={member.organization.id}
          name={member.organization.name}
          imageUrl={member.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default List;
