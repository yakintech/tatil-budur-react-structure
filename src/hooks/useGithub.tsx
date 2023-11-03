import axios from "axios";
import { useEffect, useState } from "react";
import { UserHookModel } from "../models/user/UserHookModel";


function useGithub({ userName }: any) {

    const [user, setUser] = useState<UserHookModel>({})
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState({})

    useEffect(() => {
        axios.get(`https://api.github.com/users/` + userName)
            .then(res => {
                setUser(res.data)
                setloading(false);
            })
            .catch(err => {
                seterror(err)
                setloading(false)
            })
    }, [])

    return [user, loading, error]

}



export default useGithub