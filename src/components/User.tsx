// @flow 
import React, {useState, useEffect} from 'react';
import axios from 'axios';
type Props = {
    
};

//fsc function stateless component
interface UserModel{
    first_name: string;
    last_name: string;
    email: string;
    avatar: ImageBitmap;

}

export const User = (props: Props) => {
    
    const [users, setUsers] = useState<UserModel[]>([]);
    useEffect(()=>{
        axios.get('https://reqres.in/api/users')
        .then(response =>{
            setUsers(response.data.data);
        });
    }, []);

    return (
        <div>
            <h1>Lista de Usuários</h1>            
            {users.map(user =>(
                <ul>
                    <li>{user.first_name}</li>
                    <li>{user.last_name}</li>
                    <li>{user.email}</li>
                    <li>{user.avatar}</li>
                </ul>
                ))}
            
        </div>
    );
};