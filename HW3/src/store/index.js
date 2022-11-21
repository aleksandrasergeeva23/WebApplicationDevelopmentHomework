import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: { posts: [
    {id: 1, author: "Charlotte ",  goodreads: "https://i.pinimg.com/564x/66/69/ba/6669ba0beff5c7b787f11f81e9c28e8f.jpg", price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id: 2, author: "Margaret ",  goodreads: "", price: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},
    {id: 3, author: "Anthony ", goodreads: "https://i.pinimg.com/564x/c4/2a/54/c42a547d6c97571c89a85e96a4ba5362.jpg", price: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},
    {id: 4, author: "Fyodor " ,  goodreads: "https://i.pinimg.com/564x/a5/e2/93/a5e293465b5dd6b707ccfa9e911744f9.jpg", price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id: 5, author: "Bagira" ,  goodreads: "https://i.pinimg.com/564x/60/05/1a/60051a3f37340fbfeb268f4bac04527d.jpg", price: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}, 
    {id: 6, author: "Klusha" ,  goodreads: "https://i.pinimg.com/736x/20/75/14/207514099a8559ef801eb82b3c4ff966.jpg", price: "Lorem ipsum"},
    {id: 7, author: "Akakia" ,  goodreads: "https://i.pinimg.com/564x/21/b0/d3/21b0d3153ea80688daaeb3f8342dbe60.jpg", price: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},
    {id: 8, author: "Pantera" ,  goodreads: "https://i.pinimg.com/564x/5c/48/18/5c481883f4cee2cc91646e7749273479.jpg", price: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
    {id: 9, author: "Rapunsel" ,  goodreads: "https://i.pinimg.com/564x/06/a6/ba/06a6ba8a9c97c6bb71ce99bcc65dec1a.jpg", price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id: 10, author: "Evdakia" ,  goodreads: "https://i.pinimg.com/564x/c8/7a/b8/c87ab8f51707d15d45db6dcc9802706e.jpg", price: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."}]},
    getters: {},
    mutations: {},
    actions: {}
})