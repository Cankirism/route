import React, { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios";
import { json, useParams } from "react-router-dom";

export default function UserDetail() {
  const [userDetail, setUserDetail] = useState(null);
  const params = useParams();
  useEffect(() => {
    getUserDetail();
  }, [params.id]);
  const getUserDetail=async()=>{
    const detail = await axios(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    setUserDetail(detail.data);
  }
  return (
    <div>
        {JSON.stringify(userDetail)}
     
    </div>
  )
 
}
