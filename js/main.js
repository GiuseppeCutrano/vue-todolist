const myApp = new Vue({
  el: "#root",
  data: {
    todoList: [],
    inpuTodo: "",

  },
  methods: {
    inputList: function(){
      this.todoList.push(this.inpuTodo)
    },
    removeItem: function(index){
      this.todoList.splice(index, 1)
    }
  }
})
