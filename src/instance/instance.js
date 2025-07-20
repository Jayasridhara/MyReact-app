import axios from "axios";
const baseURL=`https://687b37adb4bc7cfbda8502db.mockapi.io`;

const instance=axios.create({
    baseURL,
    header:{
        'Content-Type':'application/json',
    },
})
export default instance;