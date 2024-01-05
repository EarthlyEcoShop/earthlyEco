import axios from 'axios';
import { BASEURL, ORIGIN } from '../../../config';
import { addressCard } from '../../address/address';


export const deleteAddress = async (userUID:string,address:addressCard) => {
    const requestOptions = {
        method: 'post',
        url: `${BASEURL}/deleteAddress`,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        data:{
            userUID:userUID,
            address:address,
        },
        origin: ORIGIN,
    };
    
    await axios.request(requestOptions);
}