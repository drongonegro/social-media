import axios from "axios"

async function useUpload(file,formData){
	const envkey = import.meta.env.VITE_CLOUDINARY_ENV
	const res = await axios.post(`https://api.cloudinary.com/v1_1/${envkey}/image/upload`,formData)
	return res.data
}

export default useUpload;