export const sendReq = async () => {
  try {
    const response = await fetch("http://192.168.198.46:5000/predict", {
      method: "POST",
      body: JSON.stringify({ text: "hi" }),
      headers: { "Content-Type": "application/json" },
    });
    const value = await response.text();
    console.log(value);
    const result = JSON.parse(value);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
