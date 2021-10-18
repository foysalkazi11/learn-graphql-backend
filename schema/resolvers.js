const {userList,movies} = require('../fakeData/fakeData');
const resolvers = {
    Query:{
        //user resolvers
        users:()=>{
            return  userList;
        },
        oneUser:(parent,args)=>{
            const id = args.id
            return userList?.find(item => item?.id === parseInt(id))
            
        },
        //movies resovers
        movies:()=>{
            return movies
        },
        // User:{
        //     feavorateMovies:()=>{
        //         return movies.filter(item => item.id === 1)
        //     }
        // }

        // Mutation 
        
    },
    
    Mutation:{
            createUser: (parent,args)=>{
                const id = userList.length + 1
                userList.push({
                    id,
                    ...args.input
                })

                return userList
                
            },
            updateUser: (parent,args)=>{
                let {id,...rest} = args.input
                let updateData = userList.map(item => item.id === Number(id) ? {...item,...rest}:item)
              
                return updateData
                
            },
            removeUser: (parent,args)=>{
                let {id} = args.input
                console.log(typeof id);
                let filterData = userList.filter(item => item.id !== Number(id))
                return filterData
                
            }
        }
    
}

module.exports = {resolvers}