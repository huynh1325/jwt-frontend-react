import './GroupRole.scss'
import { toast } from 'react-toastify';
import { fetchGroup } from '../../services/userService';
import { useState, useEffect } from 'react';

const GroupRole = () => {
    const [userGroups, setUserGroups] = useState([]);

    useEffect(() => {
        getGroups();
    }, [])

    const getGroups = async () => {
        let res = await fetchGroup();
        if (res && res.EC === 0) {
            setUserGroups(res.DT);
        } else {
            toast.error(res.EM);
        }
    }

    return (
        <div className='group-role-container'>
            <div className='container'>
                <h4>Group Role:</h4>
                <div>
                    <div className='col-12 col-sm-6 form-group'>
                        <label>Select Group: (<span className='red'>*</span>) :</label>
                        <select
                            className={'form-select'}
                        >
                            {userGroups.length > 0 &&
                                userGroups.map((item, index) => {
                                    return (
                                        <option key={`group-${index}`} value={item.id}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupRole;