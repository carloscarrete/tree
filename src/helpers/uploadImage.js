
export const uploadImage = async (file, imgType) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dv6ut2tik/upload';

    const formData = new FormData();
    formData.append('upload_preset', imgType);
    formData.append('file', file);

    try{
        const res = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(!res.ok) throw new Error('No se pudo subir la imagen');

        const cloudData = await res.json();
        return cloudData.secure_url;

    }catch(error){
        throw new Error(error.message)
    }
}