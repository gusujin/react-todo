import { useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    // 배열 형태로 추가하기
    // 기존의 배열은 바뀌지 않도록
    setTodo(e.target.value);
  };
  const onClick = () => {
    if (todo.length === 0) {
      return alert("add long");
    }
    setList([...list, todo]);
    setTodo("");
    //setstate는 비동기 함수.
  };
  return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
        padding: "20px 40px",
        borderRadius: "10px",
        boxShadow: "5px 5px 25px #ccc",
        backgroundColor: "#fff",
      }}
    >
      <h1 style={{ textAlign: "center" }}>What's the task for Today?</h1>
      <div style={{ display: "flex" }}>
        <input
          style={{ flex: 1, padding: "10px 20px", fontSize: "16px" }}
          type="text"
          value={todo}
          onChange={onChange}
          placeholder="Add a todo item"
        />
        <button onClick={onClick}>Add Todo</button>
      </div>
      <div>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {list.map((todoitem) => {
            return (
              <li
                style={{
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #aaa",
                  padding: "0 15px",
                }}
              >
                {" "}
                <p style={{ flex: 1 }}>{todoitem} </p>
                <span>
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
    </div>
  );
}

export default App;
