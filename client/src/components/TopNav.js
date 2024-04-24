import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopNavbar = (props) => {
  return (
    <nav className="p-5 border-b overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" font-bold text-xl">{props.data.page}</div>
          <ul className="flex space-x-4">
            <li>
              <AccountCircleIcon />
            </li>
            <li>
              <a href="#" className=" hover:underline"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
