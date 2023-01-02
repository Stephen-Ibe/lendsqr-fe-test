import React from 'react';
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

type Props = {};

const Sidebar = (props: Props) => (
  <aside>
    <div className='sidebar_content'>
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
        <h4>Customers</h4>
        <nav>
          <ul>
            <li>
              <HiUsers />
              Users
            </li>
            <li>
              <FaUsers />
              Guarantors
            </li>
            <li>Loans</li>
            <li>
              <FaHandshake />
              Decision Models
            </li>
            <li>
              <FaPiggyBank />
              Savings
            </li>
            <li>Loan Requests</li>
            <li>
              <FaUserCheck />
              Whitelist
            </li>
            <li>
              <FaUserTimes />
              Karma
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
);

export default Sidebar;
