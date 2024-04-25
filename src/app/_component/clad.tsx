// "use client";

// import React, { useState } from "react";

// type type = {
//   name: string;
//   credits: number;
//   marks: number;
// };

// const GpaEstimator = () => {
//   const [targetGpa, setTargetGpa] = useState(0);
//   const [courses, setCourses] = useState<type[]>([]);

//   const addCourse = () => {
//     setCourses([...courses, { name: "", credits: 0, marks: 0 }]);
//   };

//   const removeCourse = (index: number) => {
//     const updatedCourses = [...courses];
//     updatedCourses.splice(index, 1);
//     setCourses(updatedCourses);
//   };

//   const updateCourse = (
//     index: number,
//     field: string,
//     value: string | number,
//   ) => {
//     const updatedCourses = [...courses];
//     updatedCourses[index][field] = value;
//     setCourses(updatedCourses);
//   };

//   const calculateGpa = () => {
//     const totalCredits = courses.reduce(
//       (acc, course) => acc + course.credits,
//       0,
//     );
//     const totalPoints = courses.reduce(
//       (acc, course) => acc + course.credits * course.marks,
//       0,
//     );
//     return totalPoints / totalCredits;
//   };

//   const calculateRequiredMarks = () => {
//     const currentGpa = calculateGpa();
//     const requiredMarks = [];

//     for (let i = 0; i < courses.length; i++) {
//       if (courses[i].marks === 0) {
//         const remainingCredits = courses
//           .filter((_, j) => j >= i && courses[j].marks === 0)
//           .reduce((acc, course) => acc + course.credits, 0);
//         const requiredMark =
//           (targetGpa *
//             (remainingCredits +
//               courses
//                 .filter((course) => course.marks > 0)
//                 .reduce((acc, course) => acc + course.credits, 0)) -
//             currentGpa *
//               courses
//                 .filter((course) => course.marks > 0)
//                 .reduce((acc, course) => acc + course.credits, 0)) /
//           remainingCredits;
//         requiredMarks.push({
//           name: courses[i].name,
//           credits: courses[i].credits,
//           requiredMarks: requiredMark,
//         });
//       }
//     }

//     return requiredMarks;
//   };

//   return (
//     <div className="text-slate-950">
//       <h1 className="text-black">GPA Estimator</h1>
//       <label>
//         Target GPA:
//         <input
//           type="number"
//           value={targetGpa}
//           onChange={(e) => setTargetGpa(parseFloat(e.target.value))}
//         />
//       </label>
//       <button onClick={addCourse}>Add Course</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Course Name</th>
//             <th>Credits</th>
//             <th>Marks</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course, index) => (
//             <tr key={index}>
//               <td>
//                 <input
//                   type="text"
//                   value={course.name}
//                   onChange={(e) => updateCourse(index, "name", e.target.value)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={course.credits}
//                   onChange={(e) =>
//                     updateCourse(index, "credits", parseInt(e.target.value))
//                   }
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={course.marks}
//                   onChange={(e) =>
//                     updateCourse(index, "marks", parseInt(e.target.value))
//                   }
//                 />
//               </td>
//               <td>
//                 <button onClick={() => removeCourse(index)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>Current GPA: {calculateGpa().toFixed(2)}</h2>
//       <h2>Required Marks:</h2>
//       <ul>
//         {calculateRequiredMarks().map((course, index) => (
//           <li key={index}>
//             {course.name} ({course.credits} credits):{" "}
//             {course.requiredMarks.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GpaEstimator;
