import React from 'react';
import img from '../assets/faq.jpg'

const Faq = () => {
    return (

        <>
        <div className="my-6 text-center font-bold text-3xl italic  ">
                FAQ
            </div>

            
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-stretch  gap-10">

            <div className='w-1/2'>
                <div className="collapse collapse-plus bg-base-100 border border-base-300 ">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">What is a Course Management System?</div>
                    <div className="collapse-content text-sm">A Course Management System is a software platform that allows institutions or instructors to create, manage, deliver, and track educational courses and content online or offline.
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold"> How can I enroll in a course?</div>
                    <div className="collapse-content text-sm">After logging in as a student, navigate to the course details, click the "Enroll" button.</div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Can instructors upload and schedule course content??</div>
                    <div className="collapse-content text-sm">Absolutely. Instructors can upload videos, PDFs, assignments, quizzes, and set schedules or deadlines for each module.</div>
                </div>


                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold"> What types of assessments are supported?</div>
                    <div className="collapse-content text-sm">The system supports quizzes, assignments, exams, and interactive tasks. Instructors can also provide feedback and grades directly through the platform.

                    </div>
                </div>


                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Is there a deadline for completing a course?</div>
                    <div className="collapse-content text-sm">It depends on the course. Some courses are self-paced, while others have fixed schedules and deadlines. Check the course details before enrolling.</div>
                </div>


                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Can I download course materials?</div>
                    <div className="collapse-content text-sm">In most cases, yes. Instructors can enable the download option for certain resources like PDFs or slides. However, some content may be restricted to online access only.

                    </div>
                </div>

            </div>


            <div className='w-1/2'>
                <img className='h-full w-full object-cover rounded-md' src={img} alt="" />
            </div>

        </div>
        </>
    );
};

export default Faq;