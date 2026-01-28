function add(a, b) {
  return a + b;
}

// Export for testing
module.exports = { add };

// Run app only when executed directly
if (require.main === module) {
  console.log("Hello from Node Demo App 🚀");
  console.log("2 + 3 =", add(2, 3));
}
