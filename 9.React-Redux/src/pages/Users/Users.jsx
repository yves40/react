import { useSelector, useDispatch } from "react-redux"
import { getData } from "../../reduxfeatures/Users"
import spinner from '../../assets/spinner.svg'

export default function Users() {

    const users = useSelector(state => state.users)
    console.log(users);
    
    return (
        <div>Users</div>
    )
}
