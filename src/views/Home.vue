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
      <p v-for="user in users" :key="user.id">{{ user }}</p>
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
        .get("http://localhost:5000/users")
        .then((res) => {
          this.users = res.data;
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(userObj);
    },
  },
};
</script>
