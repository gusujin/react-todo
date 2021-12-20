import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todo, setTodo] = useState(""); // 해야할일 1개
  const [list, setList] = useState([]); // 해야할일 객체를 모아놓은 배열
  const [id, setId] = useState(0);

  const onChange = (e) => {
    // 배열 형태로 추가하기
    // 기존의 배열은 바뀌지 않도록
    setTodo(e.target.value);
  };

  const AddTodoItem = () => {
    if (todo.length === 0) {
      return alert("add long");
    }
    setList([
      ...list,
      {
        id: id,
        title: todo,
        is_completed: false,
        is_edit_button: false,
      },
    ]);
    setTodo("");
    setId(id + 1);
  };

  const AddKeyPress = (e) => {
    if (e.key === "Enter") {
      AddTodoItem();
    }
  };
  const AddButtonClick = () => {
    AddTodoItem();
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
          item.is_completed = !item.is_completed; // 토글로 참,거짓 바꿔주기
        }
        return item; // 왜 그대로 반환해야 하는지?
      })
    );
  };

  //수정 기능
  // [ ] 수정버튼을 누르면 input 창이 나타난다
  // [ ] input 창은 기존의 내용이 담겨있어야 한다
  // [ ] input에 새로운 값을 넣고 버튼을 누르면 todo.title이 바뀐다

  const onEdit = (id) => {
    //list.text = todo
    //list의 li가 input으로 ...
    //바뀐 input의 value = newtodo 로
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.is_edit_button = !item.is_edit_button;
        }
        return item;
      })
    );
  };

  const handleUpdate = (id, title) => {
    const newTodos = list.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
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
          onKeyPress={(e) => {
            AddKeyPress(e);
          }}
        />
        <button onClick={AddButtonClick}>Add Todo</button>
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
