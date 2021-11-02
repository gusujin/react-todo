import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
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
    setList([
      ...list,
      {
        id: list.length,
        text: todo,
        done: false,
        flag: true,
      },
    ]);

    setTodo("");
    //setstate는 비동기 함수.
  };
  const onDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
    // 같은 아이디만 삭제
  };
  const onComplete = (id) => {
    //같은 아이디를 찾는다 -> 데이터를 바꿔준다
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.done = !item.done; // 토글로 참,거짓 바꿔주기
        }
        return item; // 왜 그대로 반환해야 하는지?
      })
    );
  };

  const onEdit = (id) => {
    //list.text = todo
    //list의 li가 input으로 ...
    //바뀐 input의 value = newtodo 로
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.flag = !item.flag;
        }
        return item;
      })
    );
  };

  const handleUpdate = (id, text) => {
    const newTodos = list.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setList(newTodos);
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
      <TodoList
        list={list}
        onDelete={onDelete}
        onComplete={onComplete}
        onEdit={onEdit}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default App;
