const API_BASE_URL = "https://example.com/api";

export const getRecommendedSchemes = async (aadhaarNumber) => {
  try {
    const response = await fetch(`${API_BASE_URL}/schemes?aadhaar=${aadhaarNumber}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching schemes:", error);
    return [];
  }
};

// New function for submitting grievances
export const postGrievance = async (issue) => {
  try {
    const response = await fetch(`${API_BASE_URL}/grievance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ issue }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error submitting grievance:", error);
    throw error;
  }
};
