import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiBriefcase } from 'react-icons/hi';
import fetchUsersRecords from '../../../utils/apis/User';
import TopNav from '../../../components/blocks/topnav';
import UserIcon from '../../../assets/images/users.png';

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

  return (
    <div className='relative flex flex-col'>
      <TopNav />
      <main className='relative flex w-full h-screen top-24'>
        <aside className='relative w-2/12 h-screen shadow-inner'>
          <div className='fixed h-screen px-4 py-10 z-16 '>
            <div className='flex items-center organization gap-x-4'>
              <HiBriefcase size={20} />
              <p>Switch Organisation</p>
              <IoIosArrowDown />
            </div>
          </div>
        </aside>
        <section className='relative w-full p-12 z-2'>
          <div className='heading'>
            <h1 className='text-2xl font-extrabold'>User</h1>
          </div>
          <div className='grid grid-cols-4 stats'>
            <div className='card border w-[240px] h-[160px] p-4 space-y-4'>
              <div className='p-2 bg-red-300 rounded-full card_img w-fit'>
                <img src={UserIcon} alt='users_icon' />
              </div>
              <h4>Users</h4>
              <p>2453</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
