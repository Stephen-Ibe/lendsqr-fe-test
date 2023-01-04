import React, { ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
  FaHandshake,
  FaHome,
  FaPiggyBank,
  FaUserCheck,
  FaUserTimes,
  FaUsers,
} from 'react-icons/fa';
import { HiBriefcase, HiUsers } from 'react-icons/hi';

type SidebarDataType = {
  [key: string]:
    | string
    | number
    | { id: number; title: string; icon: any }[]
    | ReactNode;
};

const sidebarData = [
  {
    heading: 'Customer',
    links: [
      { id: 0, title: 'Users', icon: <HiUsers /> },
      { id: 1, title: 'Guarantors', icon: <FaUsers /> },
      { id: 2, title: 'Loans', icon: <FaUsers /> },
      { id: 3, title: 'Decision Models', icon: <FaHandshake /> },
      { id: 4, title: 'Savings', icon: <FaPiggyBank /> },
      { id: 5, title: 'Loan Requests', icon: <FaPiggyBank /> },
      { id: 6, title: 'Whitelist', icon: <FaUserCheck /> },
      { id: 7, title: 'Karma', icon: <FaUserTimes /> },
    ],
  },
  {
    heading: 'Businesses',
    links: [
      { id: 0, title: 'Organization', icon: <HiUsers /> },
      { id: 1, title: 'Loan Products', icon: <FaUserTimes /> },
      { id: 2, title: 'Savings Products', icon: <FaUserTimes /> },
      { id: 3, title: 'Fees and Charges', icon: <FaUserTimes /> },
      { id: 4, title: 'Transactions', icon: <FaUserTimes /> },
      { id: 5, title: 'Services', icon: <FaUserTimes /> },
      { id: 6, title: 'Service Account', icon: <FaUserTimes /> },
      { id: 7, title: 'Settlements', icon: <FaUserTimes /> },
      { id: 8, title: 'Reports', icon: <FaUserTimes /> },
    ],
  },
];

const Sidebar = () => (
  <aside>
    <div className='overflow-y-auto sidebar_content'>
      <div className='organization'>
        <HiBriefcase size={20} />
        <p>Switch Organisation</p>
        <IoIosArrowDown />
      </div>
      <nav className='sidebar_links'>
        <FaHome />
        <p>Dashboard</p>
      </nav>
      <div className='sidebar_menu'>
        {sidebarData.map((data) => (
          <div className='my-6'>
            <h4>{data.heading}</h4>
            <nav>
              <ul>
                {data.links.map(({ icon, title }: any) => (
                  <li>
                    {icon}
                    {title}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default Sidebar;
