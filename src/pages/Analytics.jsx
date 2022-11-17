import { Button, Input, Modal } from "antd";
import React, { useState } from "react";

const Analytics = () => {
  const [data, setData] = useState("");
  const [name, setName] = useState([]);
  const [modelSt, setModelSt] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState(0);
  const inputChange = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };
  const valueChange = () => {
    setName([...name, data]);
  };
  const delRec = (index) => {
    let arr = [...name];
    arr.splice(index, 1);
    setName(arr);
  };
  const openModal = (item, index) => {
    console.log(index);
    setModelSt(true);
    setInputValue(item);
    setId(index);
  };
  return (
    <div>
      <input onChange={inputChange} />
      <button onClick={valueChange}>Click</button>
      {name.map((item, index) => (
        <div className="icon" key={index}>
          {item} <button onClick={delRec}>delete</button>
          <button onClick={() => openModal(item, index)}>Edit</button>
        </div>
      ))}
      <Modal
        title="Add Modal"
        open={modelSt}
        onCancel={() => setModelSt(false)}
        onOk={() => {
          let arr = [...name];
          arr[id] = inputValue;
          setName(arr);
          setModelSt(false);
        }}
      >
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Analytics;
