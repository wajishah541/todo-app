<template>
  <form v-on:submit.prevent>
    <h1>{{ title }}</h1>
    <label>Add todo here </label>
    <input type="text" required v-model="task" />
    <button class="add" @click="add">Add</button>
    <div v-for="(task, index) in tasks" :key="index">
      <ul>
        <li>
          {{ task.content }}
        </li>
      </ul>
    </div>
  </form>
</template>
<script>
export default {
  name: "Todo",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      task: "",
      tasks: [
        {
          content: task,
          ID: true,
        },
        {
          content: task,
          ID: true,
        },
      ],
    };
  },
  methods: {
    add() {
      this.tasks.push({
        content: this.task,
      });
      this.task = "";
    },
  },
};
</script>
<style>
h1 {
  text-align: center;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 40px;
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
table {
  width: 100%;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
}
input {
  color: black;
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
}

button {
  background-color: #4caf50;
  border: none;
  color: black;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 90%;
  margin: 10px;
  font-weight: bold;
}
</style>
