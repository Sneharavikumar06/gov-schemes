import React, { useState, useEffect } from "react";
import { getRecommendedSchemes, postGrievance } from "../../services/api"; // Correct import

const Grievance = () => {
  const [issue, setIssue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Fetch recommended schemes (optional)
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const schemes = await getRecommendedSchemes();
        console.log("Recommended Schemes:", schemes);
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
    };
    fetchSchemes();
  }, []);

  // Submit grievance
  const submitGrievance = async () => {
    if (!issue.trim()) {
      alert("Please describe your issue before submitting.");
      return;
    }
    try {
      await postGrievance(issue); // Use the correct function
      setSubmitted(true);
    } catch (error) {
      alert("Failed to submit grievance. Please try again.");
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Grievance Redressal</h2>
      {!submitted ? (
        <>
          <textarea
            placeholder="Describe your issue..."
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="border p-2 w-full"
          />
          <button
            onClick={submitGrievance}
            className="bg-red-500 text-white px-4 py-2 mt-2"
          >
            Submit
          </button>
        </>
      ) : (
        <p className="text-green-600">Your grievance has been submitted.</p>
      )}
    </div>
  );
};

export default Grievance;
