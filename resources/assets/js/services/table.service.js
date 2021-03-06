import axios from 'axios';

export const TableService = {
    findTableByRestID,
};
const HEADER = {headers: { Authorization: "Bearer " + localStorage.getItem('id_token') }}

/**
 * Fetch table data by Restaurant ID
 * @param {rest_id,area_id,id} param 
 */
function findTableByRestID(param)
{
    var url ="http://api.mysite.local:8000/get_table_by_rest_id";
    return axios.post(url, param, HEADER) // return here
      .then(response => response.data)
      .catch(error => error)
}