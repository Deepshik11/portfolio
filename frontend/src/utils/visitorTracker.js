// utils/visitor.js
export const trackVisitor = async (section) => {
  try {
    await fetch("https://your-backend.vercel.app/api/visitors", {
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
