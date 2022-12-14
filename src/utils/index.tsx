import axios from "axios";

//Upload image
export const uploadImage = async (fileName: string) => {
  const formData = new FormData();
  formData.append("file", fileName);
  formData.append("upload_preset", "jkpzj8vn");
  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/do9rcgv5s/image/upload",
    formData
  );
  return data.url;
};
// Format currency
export const Currency = (currency: number) =>
  currency.toLocaleString("en-US", { style: "currency", currency: "USD" });