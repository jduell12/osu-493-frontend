<template>
  <div class="home">
    <h1>Welcome to the Plant REST API</h1>
    <p>
      Please register to access the Plant REST API
      <a href="https://osu-493-portfopo.ue.r.appspot.com/plants">here</a>
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
      <label for="email">
        Email
        <input type="text" id="email" name="email" v-model="email" />
      </label>
      <label for="first_name"
        >First Name
        <input
          type="text"
          id="first_name"
          name="first_name"
          v-model="firstName"
        />
      </label>
      <label for="last_name">
        Last Name
        <input type="text" id="last_name" name="last_name" v-model="lastName" />
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
      email: "",
      firstName: "",
      lastName: "",
      users: [],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let userObj = {
        username: this.username,
        password: this.password,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
      };
      axios
        .post(
          "https://osu-493-portfolio.ue.r.appspot.com/users/register",
          userObj
        )
        .then((res) => {
          // in your authentication promise handler or callback
pendo.initialize({
    visitor: {
        id:              res.data.id  // Required if user is logged in
        email:            res.data.email
        first_name: res.data.first_name
        last_name: res.data.last_name
    },

    account: {
        id:           res.data.id // Highly recommended
        name: res.data.first_name + ' ' + res.data.last_name
    }
});
          this.users.push(res.data);
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
};
</script>
<style lang="less">
form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    padding-top: 3%;
    display: block;

    input {
      display: block;
    }
  }

  button {
    margin: 2%;
  }
}
</style>
