import React from 'react';
import { useForm } from 'react-hook-form';

const AgeCalculator = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [age, setAge] = React.useState('');

    const calculateAge = (data) => {
        const birthdate = data.birthdate;

        if (!birthdate) {
            return;
        }

        const birthDateObj = new Date(birthdate);
        const today = new Date();

        let years = today.getFullYear() - birthDateObj.getFullYear();
        let months = today.getMonth() - birthDateObj.getMonth();
        let days = today.getDate() - birthDateObj.getDate();

        if (months < 0) {
            months += 12;
            years--;
        }

        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            days += lastMonth.getDate();
            months--;
        }

        setAge(`Your age is ${years} years, ${months} months, and ${days} days`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-5">Age Calculator</h1>
            <form onSubmit={handleSubmit(calculateAge)} className="w-full max-w-sm flex flex-col items-center">
                <input type="date" {...register("birthdate", { required: "Please enter a birthdate" })}
                    className="p-3 text-xl border border-gray-300 rounded-md mb-4" />
                {errors.birthdate && <p className="text-red-500">{errors.birthdate.message}</p>}
                <button type="submit" className="bg-green-500 text-white px-6 py-3 text-lg rounded-lg mb-4">
                    Calculate Age
                </button>
            </form>
            {age && <h2 className="text-2xl">{age}</h2>}
        </div>
    );
};

export default AgeCalculator;
