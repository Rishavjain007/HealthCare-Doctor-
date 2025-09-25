import React, { useContext } from 'react';
import ThemeContext from '../Components/ThemeContext';
import { FiInbox } from 'react-icons/fi';
import {
  LuMessageSquareQuote,
  LuMessageSquareWarning,
  LuMessageSquareShare,
  LuMessageSquarePlus,
} from 'react-icons/lu';
import { MdDeleteOutline } from 'react-icons/md';
import { PiNotepad } from 'react-icons/pi';
import { IoReloadSharp } from 'react-icons/io5';
import { FaLessThan, FaGreaterThan, FaRegStar, FaStar } from 'react-icons/fa6';

const Messages = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  const sidebarLink = [
    { Icon: FiInbox, label: 'Inbox' },
    { Icon: LuMessageSquareQuote, label: 'Starred' },
    { Icon: LuMessageSquareWarning, label: 'Spam' },
    { Icon: LuMessageSquareShare, label: 'Sent' },
    { Icon: LuMessageSquarePlus, label: 'Drafts' },
    { Icon: MdDeleteOutline, label: 'Delete' },
    { Icon: PiNotepad, label: 'Notes' },
  ];

  // Corrected tableData with separate objects for each row
  const tableData = [
    { id: 1, name: 'Amy Lucier', message: 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.', date: '12 Jan 2021' },
    { id: 2, name: 'Tameika Whittle', message: 'The wise man therefore always holds in these matters to this principle of selection.', date: '17 Jan 2021' },
    { id: 3, name: 'Barbara Bayne', message: 'We denounce with righteous', date: '26 Jan 2021' },
    { id: 4, name: 'Nita Griffin', message: 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.', date: '2 Feb 2021' },
    { id: 5, name: 'Marc Flythe', message: 'The wise man therefore always holds in these matters to this principle of selection.', date: '17 Feb 2021' },
    { id: 6, name: 'Elaine Hannah', message: 'pain avoided.', date: '28 Feb 2021' },
    { id: 7, name: 'Abraham Edwards', message: 'We denounce with righteous', date: '10 Mar 2021' },
    { id: 8, name: 'Allie Smith', message: 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.', date: '19 Mar 2021' },
    { id: 9, name: 'Eleanor Cisco', message: 'The wise man therefore always holds in these matters to this principle of selection.', date: '25 Mar 2021' },
    { id: 10, name: 'Troy Turk', message: 'pain avoided.', date: '5 Apr 2021' },
    { id: 11, name: 'Tyron Elliott', message: 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.', date: '20 Apr 2021' },
    { id: 12, name: 'Betty Cook', message: 'The wise man therefore always holds in these matters to this principle of selection.', date: '29 Apr 2021' },
    { id: 13, name: 'Doris Morris', message: 'pain avoided.', date: '8 Jun 2021' },
  ];

  return (
    <section
      className="px-4 py-2 min-h-screen"
      style={{
        backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
        color: isDarkMode ? colors.darkText : colors.lightText,
      }}
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Messages</h3>

      {/* Main div */}
      <div className="flex flex-col md:flex-row items-start gap-4 mt-5">
        {/* Side Menu */}
        <div className="w-full md:w-1/4 p-3 border rounded-md">
          <button
            type="button"
            className="w-full bg-[#396CF0] py-2 mb-4 text-white text-base sm:text-lg text-center font-semibold rounded-md"
          >
            + Compose
          </button>
          <div className="space-y-2" style={{ color: isDarkMode ? colors.darkText : colors.lightText }}>
            {sidebarLink.map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                className="flex items-center w-full py-2 px-4 sm:pl-8 text-sm sm:text-base md:text-lg text-start font-semibold hover:bg-[#396CF0] hover:text-white rounded-md"
              >
                <Icon className="text-xl sm:text-2xl mr-2" /> {label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content div */}
        <div className="w-full md:w-3/4 border rounded-lg">
          {/* Navigation */}
          <div className="flex flex-wrap justify-between items-center p-4">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4" />
              <button type="button" className="ml-4 sm:ml-10">
                <IoReloadSharp className="text-lg sm:text-xl" />
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" className="text-xs p-2 border rounded-full">
                <FaLessThan />
              </button>
              <button type="button" className="text-xs p-2 border rounded-full">
                <FaGreaterThan />
              </button>
            </div>
          </div>

          {/* Table (Converted to divs for responsiveness) */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px] md:min-w-0">
              {tableData && Array.isArray(tableData) && tableData.length > 0 ? (
                tableData.map((data) => (
                  <div
                    key={data.id} // Use unique id for better performance
                    className="flex items-center p-4 border-t flex-wrap sm:flex-nowrap"
                  >
                    <div className="w-8 flex-shrink-0">
                      <input type="checkbox" className="w-4 h-4" />
                    </div>
                    <div className="w-8 flex-shrink-0 ml-4 sm:ml-10">
                      <button type="button">
                        <FaRegStar className="text-base sm:text-lg" />
                      </button>
                    </div>
                    <div className="w-32 sm:w-36 ml-4 sm:ml-10 font-semibold text-sm sm:text-base">
                      {data.name || 'N/A'}
                    </div>
                    <div className="flex-1 ml-4 sm:ml-6 text-gray-400 text-sm font-semibold min-w-0">
                      {data.message || 'No message'}
                    </div>
                    <div className="w-32 sm:w-36 ml-4 sm:ml-8 text-sm sm:text-base font-semibold text-right">
                      {data.date || 'N/A'}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-gray-500">No data available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;