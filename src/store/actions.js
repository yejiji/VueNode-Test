import {
    NEW_NOTE,
    TOGGLE_FAVORITE,
    TOGGLE_LIST_SHOW,
    DELETE_NOTE,
    UPDATE_NOTE,
    SET_CURRENT_ACTIVE_NOTE
} from './mutation-types'

export default {
    newNote({ commit }) {
        commit(NEW_NOTE);
    },
    toggleFavorite({ commit }) {
        commit(TOGGLE_FAVORITE);
    },
    deleteNote({ commit }) {
        commit(DELETE_NOTE);
    },
    toggleListShow({ commit }, data = { show: 'all' }) {
        commit(TOGGLE_LIST_SHOW, data);
    },
    updateNote({ commit }, data = { note: {} }) {
        commit(UPDATE_NOTE, data);
    },
    setActiveNote({ commit }, data = { note: {} }) {
        commit(SET_CURRENT_ACTIVE_NOTE, data);
    }
}