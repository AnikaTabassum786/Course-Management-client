import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
    return (
        <>
            <Helmet>
                <title>BidyaNiketon | Terms & Condition</title>
            </Helmet>
            <div>


                <div className="my-6 text-center font-bold text-3xl italic  ">
                    Terms & Condition
                </div>

                <p>Welcome to <span className='font-semibold text-xl'>Bidyaniketon</span>, an online learning platform. By using our website or services, you agree to the following terms:
                </p>

                <div className='flex flex-col gap-4 mt-4'>
                    <p><span className='font-medium'>Minimum Age Limit is 13 y/o: </span> You must be 13 years or older to create an account. You are responsible for keeping your account secure and for all activities under it. When enrolling in a course, you receive a limited, non-transferable license to access the content for personal, non-commercial use only.
                    </p>

                    <p>
                        <span className='font-medium'>Ownership of the Contents:</span> Instructors are solely responsible for their uploaded content and must comply with intellectual property laws. Bidyaniketon reserves the right to remove any content or suspend accounts for rule violations.

                    </p>


                    <p>
                        <span className='font-medium'>Refund Policy:</span> Refunds may be issued within 7 days of purchase if eligible. All content belongs to Bidyaniketon or respective creators and may not be reused without permission.
                    </p>

                    <p>
                        <span className='font-medium'>Government Policy:</span> Bidyaniketon is not liable for inaccuracies in content or any damages resulting from use. These terms are governed by the laws of Bangladesh. We may update these terms at any time.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Terms;