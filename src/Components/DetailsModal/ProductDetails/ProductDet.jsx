import React, { useEffect, useState } from 'react'
import './ProductDet.css'
import axios from '../../../axios'
import { useForm } from 'react-hook-form'
import Axios from 'axios'
import { Line } from 'rc-progress'
import ReactLoading from 'react-loading'
import { Backdrop, Button, Tooltip } from '@mui/material'
import { Delete } from '@mui/icons-material'


function ProductDet({ data, handleShow }) {


    const { register, handleSubmit, formState: { errors, isDirty } } = useForm();
    const [product, setProduct] = useState()
    const [image, setImage] = useState()
    const [imageDetails, setImageDetails] = useState(null)
    const [change, setChange] = useState(true)
    const [progress, setProgress] = useState(0)
    const [uploading, setUploading] = useState(false)
    const [loading, setLoading] = useState(false)

    const productWeight = ['500 G', '1 KG', '2 KG']

    useEffect(() => {
        axios.get(`getproduct/${data.proId}`)
            .then(res => {
                setProduct(res.data)
                console.log(res)
            })
            .catch(err => {
                alert(err + '')
                handleShow()
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
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "l68cm4ir");

        Axios.put("https://api.cloudinary.com/v1_1/makemycake/image/upload", formData, config)
            .then((res) => {
                setImageDetails(res.data)
                setChange(false)
            })
            .catch((err) => {
                alert("Error uploading")
                console.log(err)
                setProgress(0)
                setUploading(false)
            })

    }

    const submitForm = (product) => {
        setLoading(true)
        product.image = imageDetails?.url //leave the field if image is not uploaded
        axios({
            method: 'post',
            url: `/editproduct/${data.proId}`,
            data: product
        })
            .then((res) => {
                console.log(res.data);
                setLoading(false)
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

    const handleDelete = () => {
        const confirmBox = window.confirm(
            "Confirm Delete ?"
        )
        confirmBox && axios.delete(`deleteproduct/${product.proId}`)
            .then(res => {
                alert(res.data.id, ' - deleted')
                handleShow()
            })
            .catch(err => {
                alert(err + '')
            })
    }

    console.log(isDirty)

    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, overflowY: 'auto' }}
            open={true}
        >
            <div className='admin-edit-product-section'>
                <div className="admin-edit-product-container">
                    <div className="admin-edit-product-buttons">
                        <Tooltip title='Delete Product'>
                            <Button
                                className='admin-edit-product-delete-button'
                                onClick={handleDelete}
                            >
                                <Delete />
                            </Button>
                        </Tooltip>
                        <Button
                            className='admin-edit-product-close-button'
                            onClick={handleShow}
                        >
                            Close
                        </Button>
                    </div>
                    <div className="admin-edit-product-main">
                        <h2>Edit Product</h2>
                        <form id="edit-product" encType="multipart/form-data" onSubmit={handleSubmit(submitForm)} >
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="proId">Product-code</label>
                                <input type="text" disabled className="edit-form-control" defaultValue={data.proId} />
                            </div>
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="pname">Product name<span className="text-danger"> *</span></label>
                                <input type="text" className="edit-form-control" {...register("pname", { required: true })} defaultValue={data.pname} />
                                {errors.pname && <p>Product name is required</p>}
                            </div>
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="weight">Weight<span className="text-danger"> *</span></label>
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
                                <label className='edit-form-control-label' htmlFor="price">Price<span className="text-danger"> *</span></label>
                                <input type="number" className="edit-form-control" {...register("price", { required: true })} defaultValue={data.price} />
                                {errors.price && <p>Price is required</p>}
                            </div>
                            <div className="edit-form-group">
                                <label className='edit-form-control-label' htmlFor="image">Image<span className="text-danger"> *</span></label>
                                <input type="file" accept='jpg' name='image' className="edit-form-control input-file" onChange={(event) => handleChage(event)} />
                                <button
                                    type='button'
                                    disabled={!change || uploading }
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
                                    <img src={imageDetails ? imageDetails.url : product?.image} alt="product" />
                                </div>
                            </div>
                            <div className="edit-form-group edit-submit-button-container">
                                <button type="submit" className="btn product-edit-submit-button"
                                    disabled={!loading && !isDirty && !imageDetails} >
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
