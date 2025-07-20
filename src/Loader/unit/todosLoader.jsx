
import instance from "../../instance/instance";
import todoServices from "../../service/todoServices";

const todosLoader=async()=>
{
   try{
     const todos=await todoServices.getTodos();
    return todos;
   }
   catch(error)
   {
    return [];
   }

}
export default todosLoader;