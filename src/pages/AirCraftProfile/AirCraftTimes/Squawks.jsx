import React, { useState, useEffect, useRef } from "react";
import { HiDotsVertical } from "react-icons/hi";

const Squawks = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuDirection, setMenuDirection] = useState({}); // store direction per row
  const menuRefs = useRef({});

  const squawksData = [
    {
      id: 1,
      created: "11/7/16",
      squawk: "Lorem ipsum dolor",
      status: "Awaiting Review",
      reference: "--",
    },
    {
      id: 2,
      created: "9/18/16",
      squawk: "Lorem ipsum dolor",
      status: "Awaiting Review",
      reference: "--",
    },
    {
      id: 3,
      created: "10/10/16",
      squawk: "Another issue",
      status: "Awaiting Review",
      reference: "--",
    },
  ];

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        Object.values(menuRefs.current).every(
          (ref) => !ref?.contains(event.target)
        )
      ) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Toggle menu & determine direction (top or bottom)
  const handleMenuToggle = (id) => {
    if (openMenuId === id) {
      setOpenMenuId(null);
      return;
    }

    const ref = menuRefs.current[id];
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      const direction =
        spaceBelow < 120 && spaceAbove > spaceBelow ? "top" : "bottom";

      setMenuDirection((prev) => ({ ...prev, [id]: direction }));
      setOpenMenuId(id);
    }
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-sm text-gray-700 border-collapse relative">
        <thead className="bg-[#FAFAFA] text-left">
          <tr>
            <th className="py-2 px-3 font-medium border border-gray-300">
              Created
            </th>
            <th className="py-2 px-3 font-medium border border-gray-300">
              Squawk
            </th>
            <th className="py-2 px-3 font-medium border border-gray-300">
              Status
            </th>
            <th className="py-2 px-3 font-medium border border-gray-300">
              Reference No.
            </th>
            <th className="py-2 px-3 font-medium border border-gray-300 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {squawksData.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 transition-colors relative bg-[#FFFFFF]"
            >
              <td className="py-2 px-3 border border-gray-300">
                {item.created}
              </td>
              <td className="py-2 px-3 border border-gray-300">
                {item.squawk}
              </td>
              <td className="py-2 px-3 border border-gray-300">
                <span className="px-2 py-1 rounded text-xs font-medium bg-[#FEE4E2] text-[#B42318]">
                  {item.status}
                </span>
              </td>
              <td className="py-2 px-3 border border-gray-300">
                {item.reference}
              </td>
              <td
                className="py-2 px-3 border border-gray-300 text-center relative"
                ref={(el) => (menuRefs.current[item.id] = el)}
              >
                {/* Action Button */}
                <button
                  onClick={() => handleMenuToggle(item.id)}
                  className="p-1 hover:bg-gray-100 rounded cursor-pointer"
                >
                  <HiDotsVertical className="text-gray-600 text-lg" />
                </button>

                {/* Dropdown Menu */}
                {openMenuId === item.id && (
                  <div
                    className={`absolute right-0 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-20 ${
                      menuDirection[item.id] === "top"
                        ? "bottom-full mb-1"
                        : "top-full mt-1"
                    }`}
                  >
                    <button className="w-full text-sm px-3 py-2 hover:bg-gray-100 text-gray-700 text-left">
                      Edit
                    </button>
                    <button className="w-full text-sm px-3 py-2 hover:bg-gray-100 text-red-600 text-left">
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Squawks;
