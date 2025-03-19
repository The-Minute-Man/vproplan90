import React from 'react';

export default function submitForm(e, formDataCallback) {
    e.preventDefault();
   
    const form = e.target;
    const formData = new FormData(form);
    
    fetch("http://localhost:3000/planner", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network error');                          
        }
        return response.json();
      })
      .then((resp) => {
        formDataCallback(resp);  // Pass response to parent component
      })
      .catch((error) => {
        console.log("Error:", error);
      });
}