import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import AddressForm from './AddressForm';
import Review from './Review';
import Payment from './Payment';

const steps = ['Shipping address', 'Review your order', 'Payment details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />; // Moved Review to second step
    case 2:
      return <Payment />; // Payment is now the last step
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 px-4">
      {/* ✅ Outer Container */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        
        {/* ✅ Stepper Section */}
        <div className="flex flex-col items-center p-6">
          
          {/* 📌 Mobile Stepper */}
          <div className="md:hidden flex justify-center w-full my-4">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeStep ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* ✅ Fixed Content Section */}
          <div className="w-full min-h-[300px] md:min-h-[350px] flex flex-col justify-center">
            {getStepContent(activeStep)}
          </div>

          {/* ✅ Navigation Buttons */}
          <div className="w-full flex justify-between mt-6">
            {activeStep !== 0 && (
              <button
                onClick={handleBack}
                className="flex items-center bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                <ChevronLeftIcon className="w-5 h-5 mr-2" /> Previous
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>

        </div> {/* End of Stepper Section */}
      </div> {/* End of Outer Container */}
    </div>
  );
}
