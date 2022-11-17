import { Button, Table } from "antd";
import React from "react";

const Comment = () => {
  const data = [
    {
      title: "Name",
    },
    {
      title: "Email",
    },
    {
      title: "Address",
    },
    {
      title: "Phone Number",
    },
    {
      title: "Actions",
      render: () => {
        return (
          <div>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={data} />
    </div>
  );
};

export default Comment;
