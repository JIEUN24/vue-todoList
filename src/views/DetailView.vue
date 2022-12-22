<template>
    <div class="todo">
      <h2>TodoList 만들기</h2>
        <div class="inputBox">
        <input type="text" placeholder="할 일을 입력하세요" :value="todoText" @input="typing"/>
        <button @click="addTodo">추가하기</button>
      </div>
      <div class="todoListBox">
        <div class="todoList" v-for="todo in todoList" :key="todo.id">
          <div>
            <span>{{ todo.id }}</span>
          </div>
          <h4 class="contents">{{ todo.content }}</h4>
          <div>
            <button @click.native ="deleteTodo">완료</button>
            <button >삭제</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        todoList: [
        {
          id: 1,
          content: '546456',
          isDone: false
        },
        {
          id: 2,
          content: 'sdfsdf',
          isDone: false
        }
        ],
        todoText: ''
      };
    },
    methods: {
      addTodo() {
        if(this.todoText === '') {
          alert('할 일을 입력하세요!');
          return;
        }
        this.todoList = [...this.todoList, {id: this.todoList.length + 1, content: this.todoText, isDone: false}]
        this.todoText = ''
      },
      deleteTodo() {
        console.log('id')
        // this.todoList = this.todoList.filter((ele) => ele.id !== id)
      },
      typing(e) {
        this.todoText = e.target.value
      }
    },
    components: {
      //components
    },
  }
  </script>
  
  
  <style scoped lang="scss">
    .todo {
      margin-top: 40px;
      max-width: 1000%;
      width: 100%;
      min-height: 500px;
  
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .todoListBox {
      padding-top: 30px;
      width: 100%;
      min-height: 500px;
      background-color: #396e54;
      margin-top: -10px;
      z-index: -1;
  
      display: flex;
      flex-direction: column;
      align-items: center;
  
      .todoList {
        background-color: #fff;
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      
        .contents {
          min-width: 80%;
        }
      }
    }
    .inputBox {
      margin-top: 20px;
      height: 40px;
      border: none;
      border-radius: 5px;
      width: 100%;
      background-color: #5fb98c;
  
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
  
      input {
        width: 70%;
        height: 30px;
        border: none;
        border-radius: 10px;
        padding: 10px;
      }
  
      button {
        width: 15%;
        height: 32px;
        background-color: #396e54;
        color: #fff;
        font-weight: 700;
        border: none;
        border-radius: 5px;
  
        &:hover {
          cursor: pointer; 
          transform: scale(0.97);
        }
      }
    }
  </style>
  