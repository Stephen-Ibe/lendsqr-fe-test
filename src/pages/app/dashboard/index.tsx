import React, { useEffect } from 'react';
import fetchUsersRecords from '../../../utils/apis/User';

type Props = {};

const Dashboard = (props: Props) => {
  const getUsersRecords = async () => {
    try {
      const res = await fetchUsersRecords();
      console.log(res);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsersRecords();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
