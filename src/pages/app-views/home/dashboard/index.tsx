import React from 'react'
import useGithub from '../../../../hooks/useGithub'
import { UserHookModel } from '../../../../models/user/UserHookModel'

function Dashboard() {


    const [user, loading, error] = useGithub({ userName: "yakintech" })

   


    return (<>
        {/* <h1>Company: {user?.company.toString()}</h1>
        <h1>Location: {user?.location}</h1> */}

    </>
    )
}

export default Dashboard