import { Input, Modal } from "antd";
import React, { useState } from "react";

const About = () => {
  const [value, setValue] = useState("");
  const [print, setPrint] = useState([]);
  const [model, setModel] = useState(false);
  const [updateInput, setUpdateInput] = useState("");
  const [id, setId] = useState(0);
  const getValue = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };
  const printValue = () => {
    setPrint([...print, value]);
  };
  const deleteRecord = (index) => {
    console.log(index);
    let arr = [...print];
    arr.splice(index, 1);
    setPrint(arr);
  };

  const editRecord = (item, index) => {
    console.log(index);
    setModel(true);
    setUpdateInput(item);
    setId(index);
  };

  return (
    <div>
      <input type="text" onChange={getValue} />
      <button onClick={printValue}>Submit</button>

      {print.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => editRecord(item, index)}>edit</button>
          <button onClick={() => deleteRecord(index)}>delete</button>
        </div>
      ))}

      <Modal
        title="Basic Modal"
        open={model}
        onCancel={() => setModel(false)}
        onOk={() => {
          let arr = [...print];
          arr[id] = updateInput;
          setPrint(arr);
          setModel(false);
        }}
      >
        <Input
          value={updateInput}
          onChange={(e) => setUpdateInput(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default About;
