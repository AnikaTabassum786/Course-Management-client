import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
    return (
        <>
            <Helmet>
                <title>BidyaNiketon | Privacy Policy</title>
            </Helmet>
            <div className="my-6 text-center font-bold text-3xl italic  ">
                Privacy Policy
            </div>

            <div className='flex flex-col gap-4'>
                  <p>
                    Security of Personal Data: Bidyaniketon values your privacy. We collect limited personal data (e.g., name, email, course activity) to provide and improve our services. Your data is never sold.
                  </p>


                  <p>Cookies: We use cookies for site functionality and analytics. You can adjust browser settings to manage cookie use.
</p>
            </div>

            <div className='mt-4'>
                Your data is stored securely. Only authorized staff can access it. You may request to view, update, or delete your data anytime.

By using our platform, you agree to this policy. If you have any questions, please contact us at <span className='text-sm font-medium'>info@bidyaniketon.com</span> 
            </div>
        </>
    );
};

export default Privacy;