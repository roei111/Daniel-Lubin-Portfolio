import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from ".";

export const getData = async (collectionName) => {
  let data = [];
  const snapshot = await getDocs(collection(db, collectionName));
  snapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export const deleteWork = async (workId) => {
  await deleteDoc(doc(db, "works", workId));
};

export const uploadImageToCloudinary = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset
  formData.append("folder", "portfolio"); // Optional: specify a folder
  formData.append("transformation", "c_fill,g_face,w_500,h_500"); // Resize and center on face

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", // Replace with your Cloudinary cloud name
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};
