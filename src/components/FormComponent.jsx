import { useEffect, useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    jobTitle: "",
    diagnosisDate: "",
    diagnosisType: "",
    story: "",
    agree: false,
    verify: false,
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Add this display somewhere in your JSX:
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://your-backend-url/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          dob: "",
          jobTitle: "",
          diagnosisDate: "",
          diagnosisType: "",
          story: "",
          agree: false,
          verify: false,
        });
      } else {
        const error = await res.json();
        alert("Submission failed: " + (error?.message || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during submission.");
    }
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden bg-[url('/img/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className='px-4 py-6'>
        <div className='grid grid-cols-1 grid-rows-auto  md:grid-cols-8 md:grid-rows-12 gap-4 w-full max-w-6xl mx-auto h-screen md:h-[86vh] lg:h-[92vh]'>
          {/* Block 1 */}
          <div className='bg-gray-50 p-2 pl-5 rounded-3xl h-auto md:h-full md:col-span-4 md:row-span-5 md:col-start-1 md:row-start-10 '>
            <div className='flex flex-col pr-5 sm:pr-16 md:pr-20'>
              <span className='font-bold font-sans text-xl sm:text-lg lg:text-2xl text-[#4a2a5c] mb-1 md:mb-0.5'>
                Have you or a loved one been affected by Mesothelioma?
              </span>
              <span className='text-xs sm:text-sm md:text-xs lg:text-sm text-pretty mb-0.5'>
                As a woman, you've carried the weight of care, love, and resilience. Now it’s time someone stands with you.
              </span>
              <ul className='list-disc text-xs lg:text-[13px] pl-5 space-y-1'>
                <li>Secondary Asbestos exposure is common</li>
                <li>Misdiagnosis delays are more frequent in women</li>
                <li>Women have won significant legal settlements</li>
              </ul>
            </div>
          </div>

          {/* Block 2 */}
          <div className='bg-white p-4 rounded-3xl relative md:h-full h-88 md:col-span-4 md:row-span-9 md:col-start-1 md:row-start-1'>
            {/* 2.1 — center vertically left side */}
            <div className='absolute top-1/2 left-5 transform -translate-y-1/2 w-5/12 h-11/12 rounded-2xl z-50 backdrop-blur-xl bg-purple-300/50 border border-white'>
              <div className='flex flex-col items-start pl-5 py-8'>
                <div className='flex flex-col font-bold text-2xl md:text-3xl lg:text-4xl font-mono'>
                  <span className='font-black'>Free</span>
                  <span className='text-gray-600'>Case</span>
                  <span className='text-gray-600'>Review</span>
                </div>
                <div className='bottom-8 absolute font-medium text-xs md:text-sm'>
                  <div>
                    <span>100% Confidential</span>
                  </div>
                  <div>
                    <span>No Win, No Fee</span>
                  </div>
                  <div>
                    <span>Free Case Evaluation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Circle */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-b from-violet-900 to-blue-950 z-40 flex items-center justify-center'>
              <svg viewBox='0 0 200 200' className='absolute w-full h-full'>
                <defs>
                  <path id='circlePath' d='M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0' />
                </defs>
                <text fill='white' fontSize='25' fontWeight='bold'>
                  <textPath href='#circlePath' startOffset='50%' textAnchor='middle'>
                    ONLY 6 SLOTS LEFT 
                  </textPath>
                </text>
              </svg>
            </div>

            {/* text content */}
            <div className='absolute top-10 right-10 font-medium text-sm md:text-base'>
              <div className='flex flex-col justify-center items-end'>
                <span>We are here</span>
                <span>to help!</span>
              </div>
            </div>

            {/* contact us */}
            <div className='absolute bottom-10 right-2 md:right-10'>
              <div className='flex items-center justify-center text-sm md:text-base'>
                <div className='rounded-full bg-[#c2996b] text-white p-3 h-10 flex items-center justify-center'>contact us</div>
                <div className='rounded-full bg-[#c2996b] text-white p-3 h-10 w-10 flex items-center justify-center'>{">"}</div>
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className='bg-blue-900/70 p-4 rounded-3xl md:col-span-4 md:row-span-14 md:col-start-5 md:row-start-1'>
            <div className='text-white'>
              <div className='mt-6 md:mt-14 font-semibold text-2xl md:text-3xl lg:text-4xl font-sans mb-5'>
                <h2>Claim Form</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className='space-y-4  '>
                  {/*  Name Fields  */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <input
                        type='text'
                        placeholder='First Name*'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full bg-transparent border-b border-white/50 pb-2 text-sm md:text-base focus:outline-0'
                        required
                      />
                    </div>
                    <div>
                      <input
                        type='text'
                        placeholder='Last Name*'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full bg-transparent border-b border-white/50 pb-2 text-sm md:text-base focus:outline-0'
                        required
                      />
                    </div>
                  </div>

                  {/*  Contact Fields */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <input
                        type='tel'
                        placeholder='Phone Number*'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full bg-transparent border-b border-white/50 pb-2 text-sm md:text-base focus:outline-0'
                        required
                      />
                    </div>
                    <div>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email ID*'
                        className='w-full bg-transparent border-b border-white/50 pb-2 text-sm md:text-base focus:outline-0'
                        required
                      />
                    </div>
                  </div>

                  {/* Personal Info  */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <input
                        name='dob'
                        value={formData.dob}
                        onChange={handleChange}
                        type='date'
                        className='w-full bg-transparent border-b border-white/50 pb-2 text-sm md:text-base text-white focus:outline-0'
                      />
                      <span className='text-xs text-white/70'>Date of Birth*</span>
                    </div>

                    <div>
                      <input
                        type='text'
                        name='jobTitle'
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder='Job Title*'
                        className='w-full bg-transparent border-b border-white/50 pb-2 text-sm md:text-base focus:outline-0'
                        required
                      />
                    </div>
                  </div>

                  {/*  Diagnosis Info */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <input
                        name='diagnosisDate'
                        type='date'
                        value={formData.diagnosisDate}
                        onChange={handleChange}
                        className='w-full bg-transparent border-b border-white/50 pb-2 text-sm md:text-base text-white focus:outline-0'
                      />
                      <span className='text-xs text-white/70'>Date of Diagnosis*</span>
                    </div>
                    <div>
                      <input
                        name='diagnosisType'
                        value={formData.diagnosisType}
                        onChange={handleChange}
                        type='text'
                        placeholder='Type of Diagnosis'
                        className='w-full bg-transparent border-b border-white/50 pb-2 text-sm md:text-base focus:outline-0'
                      />
                    </div>
                  </div>

                  {/*  Story  */}
                  <div>
                    <textarea
                      name='story'
                      value={formData.story}
                      onChange={handleChange}
                      rows={1}
                      placeholder='Tell us your story (optional)'
                      className='w-full bg-transparent border-b border-white/50 text-sm md:text-base min-h-[60px] focus:outline-0'
                    ></textarea>
                  </div>
                </div>

                {/* <!-- Checkboxes --> */}
                <div className='mt-8 space-y-4'>
                  <label className='flex items-start gap-3'>
                    <input name='agree' type='checkbox' checked={formData.agree} onChange={handleChange} className='mt-1 ' required />
                    <span className='text-xs md:text-sm'>
                      I agree to the{" "}
                      <a href='#' className='underline'>
                        privacy policy{" "}
                      </a>{" "}
                      and{" "}
                      <a href='#' className='underline'>
                        disclaimer
                      </a>{" "}
                      and give my express written consent to be contacted regarding my case options.My consent does not require purchase. This is
                      Legal advertising
                    </span>
                  </label>

                  <label className='flex items-start gap-3'>
                    <input type='checkbox' name='verify' checked={formData.verify} onChange={handleChange} className='mt-1' required />
                    <span className='text-xs md:text-sm'>Please check this box to verify you're a person.</span>
                  </label>
                </div>
                {/* <!-- Submit Button --> */}
                <button
                  type='submit'
                  className='w-full bg-white text-blue-900 font-semibold py-3 px-4 rounded-lg mt-6 hover:bg-gray-100 transition-colors text-sm md:text-base'
                >
                  Start your claim now
                </button>
                <div className='text-white text-sm text-center'>Current Time: {currentTime.toLocaleTimeString()}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
