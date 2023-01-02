import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiBriefcase, HiOutlineUsers } from 'react-icons/hi';
import fetchUsersRecords from '../../../utils/apis/User';
import TopNav from '../../../components/blocks/topnav';
import UserIcon from '../../../assets/images/users.png';
import Card from '../../../components/common/card';

type Props = {};

type StatsType = {
  [key: string]: string | number;
};

const stats = [
  { id: 0, title: 'Users', value: '2453' },
  { id: 1, title: 'Active Users', value: '2453' },
  { id: 2, title: 'Users with Loans', value: '12453' },
  { id: 3, title: 'Users with Savings', value: '102453' },
] as StatsType[];

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

  return (
    <div className='relative flex flex-col'>
      <TopNav />
      <main>
        <aside>
          <div className='sidebar_content'>
            <div className='organization'>
              <HiBriefcase size={20} />
              <p>Switch Organisation</p>
              <IoIosArrowDown />
            </div>
          </div>
        </aside>
        <section className='main_content'>
          <div className='heading'>
            <h1 className='text-2xl font-extrabold'>User</h1>
          </div>
          <div className='gap-14 stats'>
            {stats.map(({ id, title, value }: StatsType) => (
              <Card key={id}>
                <HiOutlineUsers size={40} />
                <h4>{title}</h4>
                <p>{value}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
