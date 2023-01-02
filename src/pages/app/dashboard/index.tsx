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
          <div className='stats'>
            <div className='p-4 space-y-4 card'>
              <div className='p-2 rounded-full card_img w-fit'>
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
