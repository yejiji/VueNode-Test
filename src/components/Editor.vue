<template>
  <div class="note-editor">
     <div class="from-group">
         <input type="text" name="title"
         class="title from-control"
         placeholder="输入标题"
         @input="updateNote"
         v-model="currentNote.title"
         >
         <textarea
         v-model="currentNote.content" name="content"
         class="from-control" row="3" placeholder="请输入正文"
         @input="updateNote"         
         ></textarea>
     </div>
  </div>
</template>
<style>
.note-editor{
    flex: 2;
}
.note-editor textarea{
    box-sizing: border-box;
    height: 100%;
    border: 0;
    border-radius: 0;
    padding-top: 15px;
}
.from-group{
    display: flex;
    flex-flow: column;
    height: 100%;
    margin-bottom: 0;
}
.from-group textarea{
    flex-grow: 2;
}
.title{
    border:0;
}
</style>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';
export default {
  name:'Editor',
  computed:{
      ...mapGetters([
          'activeNote'
      ]),
      currentNote(){
          return this.activeNote;
      }
  },
  methods:{
      ...mapActions({
          update:'updateNote'
      }),
      updateNote(){
          this.update({
              note:this.currentNote
          });
      }
  }
}
</script>
