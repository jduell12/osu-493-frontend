<template>
  <div class="home">
    <h1>Welcome to the Plant REST API</h1>
    <p>
      Please Sign in to access the Plant REST API
      <a href="https://osu-493-portfolio.ue.r.appspot.com/plants">here</a>
    </p>
    <form @submit="onSubmit">
      <label for="username">
        Username
        <input type="text" id="username" name="username" v-model="username" />
      </label>
      <label for="password">
        Password
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
        />
      </label>
      <button>Submit</button>
    </form>
    <div v-if="users.length">
      <p>User id: {{ users[0].id }}</p>
      <p>Username: {{ users[0].username }}</p>
      <p>Token: {{ users[0].token }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data: function () {
    return {
      username: "",
      password: "",
      users: [],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let userObj = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("//localhost:5000/users/login", userObj)
        .then((res) => {
          this.users.push(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(userObj);
    },
  },
};
</script>
