import React, { useState, useEffect } from "react";
import { getRecommendedSchemes } from "../../services/api";

const SchemeRecommendation = () => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const recommendedSchemes = await getRecommendedSchemes("123456789012"); // Example Aadhaar number
        setSchemes(recommendedSchemes);
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
    };
    fetchSchemes();
  }, []);

  return (
    <div>
      <h2>Recommended Schemes</h2>
      <ul>
        {schemes.map((scheme, index) => (
          <li key={index}>{scheme.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SchemeRecommendation;
