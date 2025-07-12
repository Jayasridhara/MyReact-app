const initialState=0;
const reducer=(state,action)=>
{
  if(action.type=='LIKE')
  {
       return state+1
  }
  
  console.log(action);
}
export {initialState,reducer};