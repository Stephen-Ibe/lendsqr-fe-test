import React, { useEffect, useState } from 'react';
import fetchUsersRecords from '../../../utils/apis/User';

type Props = {};

const Dashboard = (props: Props) => {
  const [usersRecords, setUsersRecords] = useState<{
    [key: string]: any;
  } | null>();
  const getUsersRecords = async () => {
    try {
      const res = await fetchUsersRecords();
      setUsersRecords(res);
      console.log(res);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsersRecords();

    return () => {
      setUsersRecords(null);
    };
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
