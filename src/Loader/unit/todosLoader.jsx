
import instance from "../../instance/instance";

const todosLoader=async()=>
{
    try{
        const response=await instance.get(`/todos`);
            console.log(response);
            return response.data; 
    }catch (error)
    {
        return [];
    }


}
export default todosLoader;