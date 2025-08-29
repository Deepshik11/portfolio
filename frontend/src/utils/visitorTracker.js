// utils/trackVisitor.js
export const trackVisitor = async (section) => {
  try {
    await fetch("https://portfolio-rjdm.vercel.app/api/visitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section,   // shorthand for section: section
        timestamp: new Date().toISOString(), // always send ISO string for consistency
      }),
    });
  } catch (error) {
    console.error("❌ Error tracking visitor:", error);
  }
};
