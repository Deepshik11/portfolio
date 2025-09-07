// utils/visitor.js
export const trackVisitor = async (section) => {
  try {
    await fetch(`${import.meta.env.VITE_API_URL}/visitors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section,
        timestamp: new Date(),
      }),
    });
  } catch (error) {
    console.error("❌ Error tracking visitor:", error);
  }
};
