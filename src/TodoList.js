import {
  MdRemoveCircleOutline,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from "react-icons/md";

const TodoList = ({ list, onDelete, onComplete }) => {
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
                {todoitem.text}{" "}
              </p>
              <span onClick={() => onDelete(todoitem.id)}>
                <MdRemoveCircleOutline
                  style={{
                    fontSize: "22px",
                    color: "red",
                    cursor: "pointer",
                  }}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
