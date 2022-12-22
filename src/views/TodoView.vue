<template>
  <div class="todo">
    <h2>TodoList 만들기</h2>
      <div class="inputBox">
      <input type="text" placeholder="할 일을 입력하세요" :value="todoText" @input="typing"  @keyup.enter="addTodo"/>
      <button @click="addTodo">추가하기</button>
    </div>
    <div class="todoListBox">
      <div class="todoList" v-for="todo in todoList" :key="todo.id">
        <li :class="todo.isDone === false ? 'contents' : 'contentsDone'">{{ todo.content }}</li>
        <div>
          <button @click ="doneTodo(todo.id)">{{ todo.isDone === false ? '완료' : '취소'}}</button>
          <button @click ="deleteTodo(todo.id)">삭제</button>
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
    deleteTodo(id) {
      // console.log(id)
      this.todoList = this.todoList.filter((ele) => ele.id !== id)
    },
    doneTodo(id) {
      console.log(id)
      this.todoList = this.todoList.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
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
    // z-index: -1;

    display: flex;
    flex-direction: column;
    align-items: center;

    .todoList {
      margin-top: 10px;
      padding: 5px 10px;
      border-radius: 10px;
      background-color: #fff;
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    
      .contents {
        min-width: 70%;
      }

      .contentsDone {
        min-width: 70%;
        text-decoration: line-through;
      }

      button {
        width: 50px;
        height: 25px;
        margin-right: 3px;
        border: none;
        border-radius: 5px;
        background-color: #396e54;
        color: #fff;

        &:hover {
          cursor: pointer;
          transform: scale(0.97);
        }
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

    z-index: 1;

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
