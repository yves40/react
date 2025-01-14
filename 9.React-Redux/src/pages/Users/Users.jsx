import { useSelector, useDispatch } from "react-redux"
import { getData } from "../../reduxfeatures/Users"
import spinner from '../../assets/spinner.svg'

export default function Users() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    if(!users.data && !users.loading && !users.error) {
        dispatch(getData())
    }
    console.log(users);
    
    let content
    if(users.loading) {
        content = <img src={spinner} alt="Loading"></img>
    }
    else if (users.error) {
        content = <p className="text-red-600">An error occured !!!</p>
    }
    else {
        console.log(users.data)
        content = (
            <ul>
                {users.data.map(user => (
                    <li key={user.id} className="text-slate-50 text-xl">{user.name}</li>
                ))}
            </ul>
        )
    }


    return (
        <div>
            <p className="text-2xl mb-5 text-slate-100 mt-6">Clients les plus fidèles</p>
            {content}
        </div>
    )
}
