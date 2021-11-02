import {
  MdRemoveCircleOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdCreate,
} from "react-icons/md";
import { useState } from "react";

const TodoList = ({ list, onDelete, onComplete, onEdit, handleUpdate }) => {
  const [editText, setEditText] = useState("");

  return (
    <div>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {list.map((todoitem, index) => {
          return (
            <li
              key={index}
              style={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #aaa",
                boxSizing: "border-box",
                padding: "0 15px",
              }}
            >
              {" "}
              <span
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={() => onComplete(todoitem.id)}
              >
                {todoitem.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              </span>
              <p
                style={{
                  flex: 1,
                  textDecoration: todoitem.done ? "line-through" : "none",
                }}
              >
                {todoitem.flag ? (
                  todoitem.text // 기존 todo value
                ) : (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  //업데이트 된 데이터를 바꿔줌
                )}
              </p>
              <span
                onClick={() => onDelete(todoitem.id)}
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                <MdRemoveCircleOutline
                  style={{
                    fontSize: "22px",
                    color: "red",
                    cursor: "pointer",
                  }}
                />
              </span>
              <span
                onClick={() => {
                  // flag가 false => true가 될 때 handleUpdate를 한다
                  if (!todoitem.flag) {
                    handleUpdate(todoitem.id, editText);
                    setEditText("");
                  }
                  onEdit(todoitem.id);
                }}
              >
                <MdCreate />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
