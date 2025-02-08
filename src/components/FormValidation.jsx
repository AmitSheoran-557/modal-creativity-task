import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const FormValidation = () => {
    const [Formdata, setFormdata] = useState([])
    const [search, setsearch] = useState('')
    const [image, setImage] = useState('');


    const handleFile = (e) => {
        const files = e.target.files;
        const fileArr = Array.from(files);
        setImage(fileArr);
    }

    const { register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('Formdata')) || [];
        setFormdata(savedData);
    }, []);

    const handler = (e) => {
        setsearch(e.target.value);
    }

    const filterData = Formdata.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.password.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    );

    const onSubmit = (data) => {
        console.log(data);
        reset();

        swal({ title: "Are you sure?", text: "Are you sure that you want to submit?", icon: "warning", dangerMode: true, })
            .then(willSubmit => {
                if (willSubmit) {
                    const updatedData = [...Formdata, data]
                    setFormdata(updatedData)
                    swal("Done!", "Your form has been submitted!", "success");
                    localStorage.setItem('Formdata', JSON.stringify(updatedData));
                }
            });
    };

    return (
        <div className='min-h-96 mt-20'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-3 px-10'>
                <input  {...register("name", { required: "Name is required" })} placeholder="Name" type="text"
                    className="w-full max-w-[425px] px-3 lg:py-[10.5px] py-2 border rounded-xl" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                <input {...register("password", { required: "Password is required" })} placeholder="Password" type="password"
                    className="w-full max-w-[425px] px-3 lg:py-[10.5px] py-2 border rounded-xl" />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <input {...register("email", { required: "Email is required" })} placeholder="Email" type="email"
                    className="w-full max-w-[425px] px-3 lg:py-[10.5px] py-2 border rounded-xl" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <button type="submit" className="bg-blue-500 max-w-xs cursor-pointer text-white px-4 py-2 rounded-xl mt-3">Submit</button>

                <input value={search} onChange={handler} type="search" placeholder='search...' className='border px-3 py-2 max-w-xs' />

                <label htmlFor="image" className="bg-black px-4 max-w-80 text-white cursor-pointer text-2xl">
                    Select image
                    <input type="file" multiple id="image" onChange={handleFile} className="mt-3 hidden" />
                </label>
                {image &&
                    image.map((image, index) => (
                        <img key={index} className="object-cover max-w-xs max-h-80 w-full rounded-2xl" src={URL.createObjectURL(image)} alt={`selected-img-${index}`} />
                    ))}
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>

                    {filterData.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.password}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </table>
            </form>
        </div>
    );
}

export default FormValidation;
