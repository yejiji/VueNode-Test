import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/components/Editor'
import NoteList from '@/components/NoteList'
import Toolba from '@/components/Toolbar'
import { TOGGLE_LIST_SHOW } from '../store/mutation-types';
Vue.use(Router)

export default new Router({
    routes: [{
        path: 'Editor',
        name: 'Editor',
        component: Editor
    }, {
        path: 'NoteList',
        name: 'NoteList',
        component: NoteList
    }, {
        path: 'Toolbar',
        name: 'Toolbar',
        component: Toolba
    }]
})