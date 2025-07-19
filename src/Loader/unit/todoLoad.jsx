import instance from "../../instance/instance";

const todosLoad=async({params})=>
{
    const {id}=params;
    try{
        const response=await instance(`/todos/${id}`)
            
            return response.data;
    }catch (error)
    {
        return {};
    }


}
export default todosLoad;