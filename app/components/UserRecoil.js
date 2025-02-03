import axios from 'axios';
import React from 'react'
import { selector, useRecoilValue } from 'recoil';

const fetchData = selector({
    key: 'getData',
    get: async  ({ get }) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data
    }
});

const UserRecoil = () => {
    const data = useRecoilValue(fetchData);
    console.log(123, data);
    
    return (
        <div>
            User
        </div>
    );
}
 
export default UserRecoil;