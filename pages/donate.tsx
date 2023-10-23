// import React, { useState } from "react";
// import Image from "next/image";
// import Button from "@/components/Button";

// const Donate: React.FC = () => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setSelectedValue(value);

//     const rangeInput = document.getElementById("pi_input") as HTMLInputElement;
//     rangeInput.value = value;
//   };

//   const formattedNumber = selectedValue
//     ? parseInt(selectedValue).toLocaleString("en-US").replace(/,/g, ".")
//     : "0";

//   return (
//     <section className="layout h-full pt-[60px] md:pt-[130px] pb-[100px] md:pb-[120px] flex flex-col md:flex-row">
//       <style>
//         {`
//           .label_wrapper {
//             display: flex;
//             gap: 1rem;
//           }

//           .switch-one,
//           .switch-two {
//             display: none;
//           }

//           .label {
//             display: block;
//             cursor: pointer;
//             padding: 0.5rem 1rem;
//             background-color: #f2f2f2;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             text-align: center;
//             transition: background-color 0.3s, color 0.3s;
//           }

//           input:checked + label {
//             background-color: #007BFF;
//             color: white;
//           }

//           .form input[type="text"],
//           .form input[type="email"],
//           .form input[type="number"],
//           .form input[type="range"] {
//             width: 100%;
//             padding: 0.5rem;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             margin-bottom: 1rem;
//           }

//           .form button {
//             background-color: #007BFF;
//             color: white;
//             border: none;
//             border-radius: 5px;
//             padding: 0.5rem 1rem;
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }

//           .form button:hover {
//             background-color: #0056b3;
//           }
//         `}
//       </style>

//       <div className="w-full mx-5 md:mx-8 md:w-1/2">
//         <span className="mb-[14px] text-[16px] inline-block font-semibold">
//           Your Help Means So Much
//           <Image
//             width={50}
//             height={50}
//             src="/assets/icons/strip.svg"
//             alt="strip"
//             className="inline ml-2"
//           />
//         </span>
//         <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold">
//           Donate Now
//         </h2>
//         <form className="form max-w-[600px] pt-[50px] flex flex-col">
//           <div className="label_wrapper overflow-hidden flex gap-4 mb-6">
//             <input
//               className="switch-one"
//               id="nom-1"
//               type="radio"
//               name="sepuluhRb"
//               value="10000"
//               checked={selectedValue === "10000"}
//               onChange={handleOptionChange}
//             />
//             <label className="" htmlFor="nom-1">
//               10.000 Birr
//             </label>
//             <input
//               className="switch-one"
//               id="nom-2"
//               type="radio"
//               name="duaPuluhRb"
//               value="20000"
//               checked={selectedValue === "20000"}
//               onChange={handleOptionChange}
//             />
//             <label className="" htmlFor="nom-2">
//               20.000 Birr
//             </label>
//           </div>
//           <div className="label_wrapper overflow-hidden flex mb-6 gap-4">
//             <input
//               className="switch-two"
//               id="nom-3"
//               type="radio"
//               name="limaPuluhRb"
//               value="50000"
//               checked={selectedValue === "50000"}
//               onChange={handleOptionChange}
//             />
//             <label className="" htmlFor="nom-3">
//               50.000 Birr
//             </label>
//             <input
//               className="switch-two"
//               id="nom-4"
//               type="radio"
//               name="seratusRb"
//               value="100000"
//               checked={selectedValue === "100000"}
//               onChange={handleOptionChange}
//             />
//             <label className="" htmlFor="nom-4">
//               100.000 Birr
//             </label>
//           </div>
//           <label>Input Money</label>
//           <input
//             onChange={handleOptionChange}
//             type="text"
//             name="number"
//             required
//             value={selectedValue}
//             placeholder="Birr."
//             className="mb-6"
//           />
//           <label>Full Name</label>
//           <input
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             placeholder="Name"
//             className="mb-6"
//           />
//           <label>Email</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="text"
//             placeholder="Email."
//             className="mb-6"
//           />
//           <label className="pb-0 mb-[-8px]">Range Money</label>
//           <input
//             onChange={handleOptionChange}
//             type="range"
//             id="pi_input"
//             min="10000"
//             max="100000"
//             step="1000"
//             className="mb-6 px-0"
//           />
//           <p className="mb-16 text-xl">
//             Your contributions: <strong>{formattedNumber} Birr</strong>
//           </p>
//           <Button primary>Donate Now</Button>
//         </form>
//       </div>
//       <div className="w-full mx-5 md:mx-8 md:w-1/2 flex flex-col">
//         <div className="md:ml-8">
//           <h3 className="text-[24px] md:text-[30px] mb-4 font-playFair leading-tight font-bold">
//             Our Cause
//           </h3>
//           <p className="text-xl mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
//             odio nec libero iaculis cursus. Vestibulum efficitur eget lorem ac
//             lacinia. Nam nec urna eget leo luctus semper.
//           </p>
//         </div>
//         <div className="md:ml-8">
//           <div className="mb-6">
//             <iframe
//               width="100%"
//               height="315"
//               src="https://www.youtube.com/embed/VIDEO_ID"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Donate;


import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Donate: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedValue(value);

    const rangeInput = document.getElementById("pi_input") as HTMLInputElement;
    rangeInput.value = value;
  };

  const formattedNumber = selectedValue
    ? parseInt(selectedValue).toLocaleString("en-US").replace(/,/g, ".")
    : "0";

  return (
    <section className="layout h-full pt-[60px] md:pt-[130px] pb-[100px] md:pb-[120px] flex flex-col md:flex-row">
      <style>
        {`
           /* Updated styles for layout */
           .layout {
             justify-content: space-between;
             display: flex;
           }
 
           .left-content {
             flex: 1;
             max-width: 50%;
             padding: 0 20px;
           }
 
           .right-content {
             flex: 1;
             max-width: 50%;
             padding: 0 20px;
           }
 
           /* Card styles */
           .card {
             background: linear-gradient(to right, #f5f5f5, #e0e0e0);
             padding: 20px;
             border-radius: 5px;
             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
           }
 
           /* Input styles */
           .form-input {
             width: 100%;
             padding: 10px;
             border: 2px solid #ccc;
             border-radius: 5px;
             margin-bottom: 20px;
             outline: none;
             transition: border 0.3s;
           }
 
           .form-input:focus {
             border: 2px solid #007BFF;
           }

          /* Your existing styles here */
        `}
      </style>

      <div className="left-content">
        <span className="mb-[14px] text-[16px] inline-block font-semibold">
          Your Help Means So Much
          <Image
            width={50}
            height={50}
            src="/assets/icons/strip.svg"
            alt="strip"
            className="inline ml-2"
          />
        </span>
        <h2 className="text-[30px] md:text-[39px] mb-[16px] font-playFair leading-tight font-bold">
          Donate Now
        </h2>
        <div className="card">
          <form className="form max-w-[600px] pt-[50px] flex flex-col">
            <div className="label_wrapper overflow-hidden flex gap-4 mb-6">
              <input
                className="switch-one"
                id="nom-1"
                type="radio"
                name="sepuluhRb"
                value="10000"
                checked={selectedValue === "10000"}
                onChange={handleOptionChange}
              />
              <label className="" htmlFor="nom-1">
                10.000 Birr
              </label>
              <input
                className="switch-one"
                id="nom-2"
                type="radio"
                name="duaPuluhRb"
                value="20000"
                checked={selectedValue === "20000"}
                onChange={handleOptionChange}
              />
              <label className="" htmlFor="nom-2">
                20.000 Birr
              </label>
            </div>
            <div className="label_wrapper overflow-hidden flex mb-6 gap-4">
              <input
                className="switch-two"
                id="nom-3"
                type="radio"
                name="limaPuluhRb"
                value="50000"
                checked={selectedValue === "50000"}
                onChange={handleOptionChange}
              />
              <label className="" htmlFor="nom-3">
                50.000 Birr
              </label>
              <input
                className="switch-two"
               
                type="radio"
                name="seratusRb"
                value="100000"
                checked={selectedValue === "100000"}
                
              />
              <label className="" htmlFor="nom-4">
                100.000 Birr
              </label>
            </div>
            <label>Input Money</label>
            <input
              onChange={handleOptionChange}
              type="text"
              name="number"
              required
              value={selectedValue}
              placeholder="Birr."
              className="form-input"
            />
            <label>Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="form-input"
            />
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email."
              className="form-input"
            />
            <label className="pb-0 mb-[-8px]">Range Money</label>
            <input
              onChange={handleOptionChange}
              type="range"
              id="pi_input"
              min="10000"
              max="100000"
              step="1000"
              className="form-input px-0"
            />
            <p className="mb-16 text-xl">
              Your contributions: <strong>{formattedNumber} Birr</strong>
            </p>
            <Button primary>Donate Now</Button>
          </form>
        </div>
      </div>
      <div className="right-content">
        <div className="md:ml-8">
          <h3 className="text-[24px] md:text-[30px] mb-4 font-playFair leading-tight font-bold">
            Our Cause
          </h3>
          <p className="text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            odio nec libero iaculis cursus. Vestibulum efficitur eget lorem ac
            lacinia. Nam nec urna eget leo luctus semper.
          </p>
        </div>
        <div className="md:ml-8">
          <div className="mb-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
