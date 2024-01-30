import {createSlice} from "@reduxjs/toolkit"

const sliderSlice=createSlice({

    name:'slider',
    initialState:{
        value:0,
        length:4
    },
    reducers:{
        nextslide:(state,action)=>{
            console.log("state",state)
            console.log("action",action.payload)
              state.value=action.payload>state.length-1?0:action.payload;
        },
        prevslide:(state,action)=>{
            state.value=action.payload<0?state.length-1:action.payload;
        },
        dotslide:(state,action)=>{
state.value=action.payload;
        }
    }

})


export const {nextslide,prevslide,dotslide}=sliderSlice.actions;
export default sliderSlice.reducer;