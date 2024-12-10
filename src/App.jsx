import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import TodoList from "./pages/todo/Index";
import TodoDetail from "./pages/todo/TodoDetail";
import TodoAdd from "./pages/todo/TodoAdd";
import TodoEdit from "./pages/todo/TodoEdit";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { TODO_MOCK_DATA } from "./constants/mockdata";
import { useState } from "react";

let originData = [...TODO_MOCK_DATA];

function App() {
  const [todoList, setTodoList, setCountId] = useState(originData);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* 소개 */}
          <Route path="/" element={<About />} />

          {/* todo 중첩 */}
          <Route path="/todo">
            <Route
              index
              element={
                <TodoList todoList={todoList} setTodoList={setTodoList} />
              }
            ></Route>
            <Route
              path="add"
              element={
                <TodoAdd
                  todoList={todoList}
                  setTodoList={setTodoList}
                  setCountId={setCountId}
                />
              }
            ></Route>
            <Route
              path="detail"
              element={<TodoDetail todoList={todoList} />}
            ></Route>
            <Route
              path="edit/:id"
              element={
                <TodoEdit todoList={todoList} setTodoList={setTodoList} />
              }
            ></Route>
          </Route>

          {/* 없는 페이지 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
