import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { HiBriefcase } from 'react-icons/hi';
import fetchUsersRecords from '../../../utils/apis/User';
import TopNav from '../../../components/blocks/topnav';

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
    <>
      <TopNav />
      <main className='flex w-full h-screen'>
        <aside className='relative w-2/12 h-screen shadow-inner '>
          <div className='fixed z-30 h-screen px-4 py-10'>
            <div className='flex items-center organization gap-x-4'>
              <HiBriefcase size={20} />
              <p>Switch Organisation</p>
              <IoIosArrowDown />
            </div>
          </div>
        </aside>
        <section className='relative w-full'>hello</section>
      </main>
    </>
  );
};

export default Dashboard;
