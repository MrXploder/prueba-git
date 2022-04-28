<template>
  <div class="container">
    <div class="row">
      <div class="col mx-auto text-center">
        <TodoList nombre="deberes"/>
        <TodoList nombre="supermercado"/>
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export default {
  name: "App",
  components: { TodoList },
};
</script>

<style></style>
