import axios from "axios";
import { useEffect } from "react";

const Users = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const respons = await axios.get('');
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers();
  }, []);


  return (
    <div>users</div>
  )
}

export default Users