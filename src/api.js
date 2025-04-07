const API_BASE_URL = "http://localhost:5000"; // Backend ka URL

export const sendMessage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, error: error.message };
  }
};
