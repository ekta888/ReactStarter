import React, { useState } from 'react';
import { Input, Label, ListGroup, ListGroupItem } from 'reactstrap';
import SimpleBar from 'simplebar-react';
import DashCard from '../../dashboardCards/DashCard';

import user1 from '../../../../assets/images/users/user1.jpg';
import user2 from '../../../../assets/images/users/user2.jpg';
import user3 from '../../../../assets/images/users/user3.jpg';
import user4 from '../../../../assets/images/users/user4.jpg';

const TaskList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      completed: false,
      labelname: 'Today',
      labelcolor: 'danger',
      image1: user1,
      image2: user2,
      time: '1 August 2019',
    },
    {
      id: 2,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      completed: false,
      labelname: '1 week',
      labelcolor: 'primary',
      image1: user3,
      image2: user4,
      time: '26 Jun 2017',
    },
    {
      id: 3,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      completed: false,
      labelname: 'Yesterday',
      labelcolor: 'info',
      image1: user3,
      image2: user4,
      time: '20 July 2018',
    },
    {
      id: 4,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      completed: false,
      labelname: '2 week',
      labelcolor: 'warning',
      image1: user3,
      image2: user4,
      time: '26 jun 2017',
    },
    {
      id: 5,
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      completed: false,
      labelname: 'Yesterday',
      labelcolor: 'info',
      image1: user3,
      image2: user4,
      time: '20 July 2018',
    },
  ]);

  const toggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      }),
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <DashCard title="To Do List" subtitle="This Months Task">
      <SimpleBar style={{ height: '452px' }}>
        <div>
          <ListGroup className="">
            {todos.map((todo) => (
              <ListGroupItem
                className={`border-0 mb-3 d-flex ps-0 ${todo.completed ? 'completed' : ''}`}
                key={todo.id}
              >
                <div>
                  <Label className="hstack gap-3">
                    <Input
                      type="checkbox"
                      defaultChecked={todo.completed}
                      id={todo.id}
                      className="flex-shrink-0 ms-1"
                      onClick={() => toggleComplete(todo.id)}
                    />
                    <span className="w-75">{todo.content}</span>
                  </Label>
                  <div className="ms-2">
                    <div className={`rounded-pill ms-4 badge bg-${todo.labelcolor}`}>
                      {todo.labelname}
                    </div>
                  </div>
                </div>
                <div className="ms-auto">
                  <i className="bi bi-trash cursor-pointer" onClick={() => deleteTodo(todo.id)}></i>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </SimpleBar>
    </DashCard>
  );
};

export default TaskList;
