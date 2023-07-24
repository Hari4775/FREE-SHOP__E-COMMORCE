import { createSlice } from "@reduxjs/toolkit";
const initialState="";

const SearchSlice=createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearchQuery:(state,action)=>{
        return action.payload;
        },
        Setsingle:(state,action)=>{
        return action.payload;
       },
        Catageryslice:(state,action)=>{
        return action.payload;
       }

     
}
})

export  const {setSearchQuery,Setsingle,Catageryslice}=SearchSlice.actions;
export default SearchSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = ''; // Initial state for setSearchQuery and Setsingle

// const categoryInitialState = []; // Initial state for Catageryslice (an array)

// const SearchSlice = createSlice({
//   name: "search",
//   initialState,
//   reducers: {
//     setSearchQuery: (state, action) => {
//       return action.payload;
//     },
//     Setsingle: (state, action) => {
//       return action.payload;
//     },
//     Catageryslice: (state, action) => {
//       return action.payload;
//     },
//   },
// });

// export const { setSearchQuery, Setsingle, Catageryslice } = SearchSlice.actions;
// export default SearchSlice.reducer;
