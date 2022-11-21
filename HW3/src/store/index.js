import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: { posts: [
    {id: 1, author: "Charlotte ",  goodreads: "https://i.pinimg.com/originals/05/2c/77/052c779c22d9d7972e9d1e2b42dffd83.jpg", price: 20},
    {id: 2, author: "Margaret ",  goodreads: "4.3/5", price: 22},
    {id: 3, author: "Anthony ", goodreads: "4/5", price: 13},
    {id: 4, author: "Fyodor " ,  goodreads: "4.2/5", price: 18},
    {id: 5, author: "Bagira" ,  goodreads: "4.2/5", price: 18}, 
    {id: 6, author: "Klusha" ,  goodreads: "4.2/5", price: 18},
    {id: 7, author: "Akakia" ,  goodreads: "4.2/5", price: 18},
    {id: 8, author: "Pantera" ,  goodreads: "4.2/5", price: 18},
    {id: 9, author: "Rapunsel" ,  goodreads: "4.2/5", price: 18},
    {id: 10, author: "Evdakia" ,  goodreads: "4.2/5", price: 18}]},
    getters: {},
    mutations: {},
    actions: {}
})