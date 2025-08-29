export const trackVisitor = async (section) => {
  try {
    await fetch("http://localhost:5000/api/visitors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section: section,   // e.g. "home", "projects", "about"
        timestamp: new Date(),
      }),
    });
  } catch (error) {
    console.error("❌ Error tracking visitor:", error);
  }
};