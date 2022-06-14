import React, { useEffect, useState } from 'react'
import './ProductDet.css'
import axios from '../../../axios'
import { useForm } from 'react-hook-form'
import Axios from 'axios'
import { Line } from 'rc-progress'
import ReactLoading from 'react-loading'
import { Backdrop, Button } from '@mui/material'


function ProductDet({ data, handleShow }) {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [product, setProduct] = useState()
    const [image, setImage] = useState()
    const [imageDetails, setImageDetails] = useState([])
    const [change, setChange] = useState(true)
    const [progress, setProgress] = useState(0)
    const [uploading, setUploading] = useState(false)
    const [loading, setLoading] = useState(false)

    const productWeight = ['500 G', '1 KG', '2 KG']

    useEffect(() => {
        console.log('use')
        axios.get(`getproduct/${data.proId}`)
            .then(res => {
                setProduct(res.data)
                console.log(res)
            })
            .catch(err => {
                alert(err + '')
            })
        return () => {
            setProduct([])
        }
    }, [])


    const config = {
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
            setProgress(percentCompleted)
        }
    }


    const uploadImage = () => {
        setUploading(true)
        console.log(image)
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "l68cm4ir");

        Axios.put("https://api.cloudinary.com/v1_1/makemycake/image/upload", formData, config)
            .then((res) => {
                setImageDetails(res.data)
                setChange(false)

            }).catch((err) => {
                alert("Error uploading")
                console.log(err)
                setProgress(0)
                setUploading(false)
            })

    }

    const submitForm = (data) => {
        setLoading(true)
        data.image = imageDetails.url
        axios({
            method: 'post',
            url: '/addproduct',
            data: data
        })
            .then((response) => {
                console.log(response);
                alert(data.pname + " - Added")
                handleShow()
            })
            .catch((error) => {
                setLoading(false)
                console.log(error);
                alert(error)
            });
    }

    const handleChage = (event) => {
        setImage(event.target.files[0])
        setChange(true)
        setProgress(0)
        setUploading(false)
    }
    const productId = data.proId.split(/(\d+)/)[1] //split string, second element is number
    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, overflowY: 'auto' }}
            open={true}
        >
            <div className='admin-edit-product-section'>
                <div className="admin-edit-product-container">
                    <Button
                        className='admin-addproduct-close-button'
                        onClick={handleShow}
                    >
                        Close
                    </Button>
                    <div className="admin-edit-product-main">
                        <h2>Edit Product</h2>
                        <form id="edit-product" encType="multipart/form-data" onSubmit={handleSubmit(submitForm)} >
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="pname">Product name<span className="text-danger">*</span></label>
                                <input type="text" className="edit-form-control" {...register("pname", { required: true })} defaultValue={data.pname} />
                                {errors.pname && <p>Product name is required</p>}
                            </div>
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="weight">Weight<span className="text-danger">*</span></label>
                                <select type="select" className="edit-form-control select-checkbox" {...register("weight", { required: true })}  >
                                    <option value={data.weight}>{data.weight}</option>
                                    {
                                        productWeight.map((w, index) => {
                                            if (w === data.weight) return (null)
                                            return <option value={w} key={index} >{w}</option>
                                        })
                                    }
                                </select>
                                {errors.weight && <p>Weight is required</p>}
                            </div>
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="proId">Product-code<span className="text-danger">*</span></label>
                                <input type="number" className="edit-form-control" {...register("proId", { required: true })} defaultValue={productId} />
                                {errors.proId && <p>Product code is required</p>}
                            </div>
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="price">Price<span className="text-danger">*</span></label>
                                <input type="number" className="edit-form-control" {...register("price", { required: true })} defaultValue={data.price} />
                                {errors.price && <p>Price is required</p>}
                            </div>
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="image">Image<span className="text-danger">*</span></label>
                                <input type="file" name='image' className="edit-form-control input-file" onChange={(event) => handleChage(event)} />
                                <button
                                    type='button'
                                    disabled={!change || uploading}
                                    className='btn edit-product-upload-button'
                                    style={{ backgroundColor: `${change ? 'blue' : '#00a623'}` }}
                                    onClick={uploadImage} >
                                    {change ? `${uploading ? 'Uploading' : 'Upload'}` : "Done"}
                                </button>
                                <div className="edit-upload-progress">
                                    <Line percent={progress}
                                        trailColor={`rgba(188, 188, 188, ${progress / 100})`}
                                        trailWidth='8'
                                        strokeWidth="8"
                                        strokeColor={progress === 100 ? '#37cc4e' : `rgba(62, 152, 199, ${progress / 100})`} />
                                    <h4 style={{ color: `${progress === 100 ? '#37cc4e' : `rgba(62, 152, 199, ${progress / 100})`}` }} >{progress}%</h4>
                                </div>
                                <div className="admin-edit-product-image">
                                    <img src={product?.image} alt="1" />
                                </div>
                            </div>
                            <div className="edit-form-group edit-submit-button-container">
                                <button type="submit" className="btn product-edit-submit-button"
                                    disabled={change && !loading} >
                                    {loading ? <ReactLoading type={'bars'} color={'#fff'} /> : 'SAVE'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Backdrop>
    )
}

export default ProductDet
