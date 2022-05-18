// import React from 'react'
// import {useForm} from 'react-hook-form'
// import SignUpFormValidationSchema from '../validations/SignUpFormValidationSchema'
// import SignUpFormValidationSchema from "../validations/SignUpFormValidationSchema"
 
  // const{register,handleSubmit,watch,formState:{errors}}=useForm();
// const  handleSubmit=async (e)=>{
// e.preventDefault()
// let formData={
//   username: e.target[0].value,
//   email: e.target[1].value,
//   password:e.target[2].value,
//   passwordConfirmation:e.target[3].value,
// }
// console.log(formData)
// const isValid=await SignUpFormValidationSchema.isValid(formData)
// console.log(isValid)
// }





import React from 'react'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'


const SignUpForm=()=> {
  const SignUpFormValidationSchema=yup.object().shape({
    username:yup.string().required(),
    email: yup.string().email().required(),
    password:yup.string().required(),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

const{register,handleSubmit,formState:{errors}}=useForm({
  resolver:yupResolver(SignUpFormValidationSchema)
})

const onSubmit=(data)=>{
  console.log(data)

}
  return (
    <div className='signup'><h2>SignUp Form</h2>
      <div>
        <span>Register yourself</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name= 'username' type='text' placeholder='username' {...register("username")}/> <br/>
          {errors.username&&<p>{errors.username?.message}</p>}

          <input name='email' type='email' placeholder="email" {...register('email')}/>   <br/>  
          {errors.email&&<p>{errors.email?.message}</p>}

          <input name='password' type='password' placeholder="Enter your password" {...register('password')}/><br/>
          {errors.password&&<p>{errors.password?.message}</p>}

          <input name='passwordConfirmation' type='password' placeholder="re-enter password" {...register('passwordConfirmation')}/><br/>
          {errors.passwordConfirmation&&<p>{errors.passwordConfirmation?.message}</p>}

          <button className='btn' type='submit'>Register</button>
        </form>
      </div>
    </div>

 
  )
}
export default SignUpForm;



//...............................................................using useform.........................................................................
// import React from 'react'
// import {useForm} from 'react-hook-form'

 
// const SignUpForm=()=> {
//   const{register,handleSubmit,watch,formState:{errors}}=useForm();

//   const onSubmit=(data)=>{
//     console.log(data)

//   }

//   return (
//     <div className='signup'><h2>SignUp Form</h2>
//       <div>
//         <span>Register yourself</span>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <input type='text'{...register('username',{required:true})} placeholder='username'/>{errors.username && "Username is required"} <br/>
//           <input type='email'{...register('email',{required:true})} placeholder="email"/>{errors.email && "email is required"}<br/>
//           <input type='password' {...register('password',{required:true})}placeholder="Enter your password"/>{errors.password && "Password is required"}<br/>
//           <input type='password'{...register('rePasword',{required:true,validate:value=>{if(watch('password') !==value){return "Your password does not match"}}})} placeholder="re-enter password"/>{errors.rePasword &&"Please re-enter your password or your password does not match"}<br/>
//           <button className='btn' type='submit'>Register</button>
//         </form>
//       </div>
//     </div>

 
//   )
// }
// export default SignUpForm;
