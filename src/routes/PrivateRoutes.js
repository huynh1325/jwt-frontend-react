import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {
    Route
} from 'react-router-dom'
import { UserContext } from '../contextt/UserContext';

const PrivateRoutes = (props) => {
    let history = useHistory();
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(" check user: ", user)
        let session = sessionStorage.getItem('account');
        if (!session) {
            history.push("/login");
            window.location.reload();
        }
    }, []);
    return (
        <>
            <Route path={props.path} component={props.component}/>
        </>
    )
}

export default PrivateRoutes