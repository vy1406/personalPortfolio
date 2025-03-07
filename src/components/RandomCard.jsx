

const RandomCard = ({ title, description, link }) => {
  return (
    <div className="max-w-md p-6  border  rounded-lg shadow bg-gray-800 border-gray-700 w-full md:w-auto select-none random-card">
      <h3 className="text-xl font-bold text-left text-white mb-8">
          {title}
        </h3>
      <p className="mb-3 font-normal text-gray-400">
        {description}
      </p>

      {link && <a
        href={link}
        target="_blank"
        className="inline-flex font-medium items-center text-blue-600 hover:underline"
      >
        Go there
        <svg
          className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>}

    </div>
  );
};

export default RandomCard;
