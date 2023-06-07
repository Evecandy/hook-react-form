import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
import './App.css'
const schema = yup.object({
  firstName: yup.string().required("Enter your first name"),
  middleName: yup.string().required("Enter your middle name"),
  lastName: yup.string().required("Enter your last name"),
  email: yup.string(). matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Enter a valid email address').required('Email is required'),
  age: yup.number("Age should be a number").min(12, "Minimum age accepted is 12").integer().required("Age is compulsory").typeError("should be a number"),
  typeOfDance: yup.string().required('Select a type of dance'),

})

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({resolver:yupResolver(schema)});
  const onSubmit = data => console.log(data);

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
   <div className = "form-container"> 
<form onSubmit={handleSubmit(onSubmit)}>
 
  <label htmlFor="fName">First Name</label>
      <input type = "text" id = "fName" placeholder="first name"{...register("firstName", { required: true, maxLength: 20 })} />
      <p>{errors.firstName?.message}</p>
      <label htmlFor="mName">Middle Name</label>
      < input type = "text" id = "mName" placeholder="middle name" {...register("middleName", { required: true, maxLength: 20 })} />
      <p>{errors.middleName?.message}</p>
      <label htmlFor="lName">Last Name</label>
      < input type = "text" id = "lName" placeholder="last name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <p>{errors.lastName?.message}</p>
      <label htmlFor="email">Email Address</label>
      < input type = "text" id = "email" placeholder="email address" {...register("lastName")} />
      <p>{errors.email?.message}</p>
      <label htmlFor="age">Age</label>
      < input min="12" type = "number" id = "age" placeholder="age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <label htmlFor="gender">Gender</label>
      <select id = "gender" name = "gender" {...register("gender")}>
      <option value="" disabled selected>Select a gender</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="binary">other</option>

</select>
        <label htmlFor="dance">Type of dance </label>
      <select id = "dance" name = "typeOfDance" placeholder="what you dance" {...register("typeOfDance")}>
      <option value="" disabled selected>Select a dance</option>
        <option value="Hiphop">Hiphop</option>
        <option value="Salsa">Salsa</option>
        <option value="DanceHall">Dancehall</option>
      </select>
      <p>{errors.typeOfDance ?.message}</p>
      <input type="submit" className="submit-button" value="Submit" />

    </form>
    </div>
    
  );
}

export default App;

