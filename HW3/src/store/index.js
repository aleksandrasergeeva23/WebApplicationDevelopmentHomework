import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: { posts: [{
        postId: 1,
        postAuthotrName: "Snoopy",
        postAuthorImage: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        postCreateTime: "02.10.2022",
        postImage: "https://i.pinimg.com/564x/66/69/ba/6669ba0beff5c7b787f11f81e9c28e8f.jpg",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        postStatusIfLiked: false,
        postCounterLike: 1
        },
        {   
        "postId": 2,
        "postAuthotrName": "Ariel",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "03.10.2022",
        "postImage": "",
        "postText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "postStatusIfLiked": true,
        "postCounterLike": 0
        },
        {
        "postId": 3,
        "postAuthotrName": "Jasmine",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "04.10.2022",
        "postImage": "https://i.pinimg.com/564x/c4/2a/54/c42a547d6c97571c89a85e96a4ba5362.jpg",
        "postText":"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        "postStatusIfLiked": false,
        "postCounterLike": 0
        },
        {
        "postId": 4,
        "postAuthotrName": "Tiana",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "05.10.2022",
        "postImage": "https://i.pinimg.com/564x/a5/e2/93/a5e293465b5dd6b707ccfa9e911744f9.jpg",
        "postText":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        "postStatusIfLiked": true,
        "postCounterLike": 0
        },
        {
        "postId": 5,
        "postAuthotrName": "Belle",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "06.10.2022",
        "postImage": "https://i.pinimg.com/564x/60/05/1a/60051a3f37340fbfeb268f4bac04527d.jpg",
        "postText":"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        "postStatusIfLiked": false,
        "postCounterLike": 0
        },
        {
        "postId": 6,
        "postAuthotrName": "Rapunzel",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "07.10.2022",
        "postImage": "https://i.pinimg.com/736x/20/75/14/207514099a8559ef801eb82b3c4ff966.jpg",
        "postText":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        "postStatusIfLiked": true,
        "postCounterLike": 0
        },
        {
        "postId": 7,
        "postAuthotrName": "Merida",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "08.10.2022",
        "postImage": "https://i.pinimg.com/564x/21/b0/d3/21b0d3153ea80688daaeb3f8342dbe60.jpg",
        "postText":"",
        "postStatusIfLiked": false,
        "postCounterLike": 0
        },
        {
        "postId": 8,
        "postAuthotrName": "Cinderella",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "09.10.2022",
        "postImage": "https://i.pinimg.com/564x/5c/48/18/5c481883f4cee2cc91646e7749273479.jpg",
        "postText":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        "postStatusIfLiked": false,
        "postCounterLike": 0
        },
        {
        "postId": 9,
        "postAuthotrName": "Mulan",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "10.10.2022",
        "postImage": "https://i.pinimg.com/564x/06/a6/ba/06a6ba8a9c97c6bb71ce99bcc65dec1a.jpg",
        "postText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "postStatusIfLiked": true,
        "postCounterLike": 0
        },
        {
        "postId": 10,
        "postAuthotrName": "Pocahontas",
        "postAuthorImage": "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
        "postCreateTime": "11.10.2022",
        "postImage": "https://i.pinimg.com/564x/c8/7a/b8/c87ab8f51707d15d45db6dcc9802706e.jpg",
        "postText":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        "postStatusIfLiked": false,
        "postCounterLike": 0
        }
    ]},
    getters: {
        getLikes(state){
            return state.posts.postCounterLike;
        }
    },
    mutations: {
        changeCount(state,payload){ 
            return state.count += payload  
        },
    },
    actions: {
        async changeCount({commit}, payload){  
            return Promise.resolve(commit('changeCount', payload))  
        }  
    }
})