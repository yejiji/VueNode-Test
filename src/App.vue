<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>
import './assets/test.css';
import Toolbar from './components/Toolbar';
import NoteList from './components/NoteList';
import Editor from './components/Editor';
export default {
  name: 'App',
  components:{
    Toolbar,
    NoteList,
    Editor
  }
}
</script>

<style>
html{
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   align-items: stretch;
   height: 100vh;
  display: flex;
}
</style>
