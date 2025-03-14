import * as React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';

function InfoMobile({ totalPrice }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {/* Button to open the drawer */}
      <button
        className="flex items-center text-blue-600 hover:text-blue-800 transition"
        onClick={() => setOpen(true)}
      >
        View details
        <span className="ml-1">
          ▼
        </span>
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-t-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Info Component */}
            <Info totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </div>
  );
}

InfoMobile.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default InfoMobile;
