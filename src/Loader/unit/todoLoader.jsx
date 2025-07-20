import instance from "../../instance/instance";
import todoServices from "../../service/todoServices";

const  todoLoader=async({params})=>
{
    try{
        const {id}=params;
   const todo=await todoServices.getTodoById(id);
   return todo;

    }
    catch(error)
    {
        return [];
    }
}
export default todoLoader;