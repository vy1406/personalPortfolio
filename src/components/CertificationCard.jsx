

const CertificationCard = ({ title, certificateLink }) => {
    return (
      <div className="certificate-card max-w-md p-2 md:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {title}
          </h5>
        
        <a
          href={certificateLink}
          target="_blank"
          className="inline-flex font-medium  text-sm items-center text-blue-600 hover:underline"
        >
          Show Certificate
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
        </a>
      </div>
    );
  };
  
  export default CertificationCard;
  