import React, { useState } from "react";
import arrow_left from "../assets/SVG/arrow_left.svg";
import arrow_right from "../assets/SVG/arrow_right.svg";

const Pagination = ({
  page,
  setPage,
  perPage,
  setPerPage,
  totalItems,
  options = [10, 25, 50],
  fullWidth = true,
}) => {
  const [open, setOpen] = useState(false);
  const totalPages = Math.ceil(totalItems / perPage);

  return (
    <div
      className={`flex flex-col md:flex-row md:items-center justify-center gap-2 mt-6 text-[#6C6C6C] h-10 
        ${fullWidth ? "w-full" : "w-1/2"}`}
    >
      <div className="flex items-center gap-2 h-10">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 transition disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          <img src={arrow_left} alt="Prev" className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium text-sm text-[#4F4D55] transition ${
              num === page
                    ? "border border-[#1751D0] text-[#1751D0] font-semibold "
                    : "border border-transparent hover:border-[#1751D0] hover:bg-[#eaf0fc] text-[#4F4D55]"
                }`}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))}

        <button
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 transition disabled:opacity-50"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          <img src={arrow_right} alt="Next" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
