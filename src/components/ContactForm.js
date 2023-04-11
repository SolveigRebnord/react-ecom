import { useFormik, FormikProvider, useField } from 'formik';
import * as yup from 'yup'; //validation
import React from 'react';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { GreenBtnS } from '../styles/Buttons';
import ContactConfirmation from './ContactConformation';




const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const handleChange = () => handleChange()
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;


    const [isShown, setIsShown] = useState(false);


   
  return (

    
    <div className={`form-control ${showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}>
      <div className="flex items-center justify-between flex-row text-lg font-semibold my-3" >
        <label htmlFor={props.id}>{label}</label>
        <div className="text-sm font-light text-gray-600 " id={`${props.id}-help`} tabIndex="-1">
            <div className='relative'>
                <button className=' '
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    <img src='/question.svg' className='w-6'></img>
                </button>
                {isShown && (
                 <div className='min-w-fit whitespace-nowrap bg-white absolute bottom-2 right-8 z-2' >
                    {helpText}
                </div>)}
            </div>
        </div>
      </div>
      {field.name !== 'message' ?
        <div>
            <input className='border border-gray-200 px-2 rounded-md w-full h-10 '
            {...props}
            {...field}
            aria-describedby={`${props.id}-feedback ${props.id}-help`}
            onFocus={handleFocus}/>
        </div> :   <div>
            <textarea className='border border-gray-200 px-2 rounded-md w-full '
            {...props}
            {...field}
            maxLength={500}
            aria-describedby={`${props.id}-feedback ${props.id}-help`}
            onFocus={handleFocus}/>
        
        </div>}
        <div className='h-6 pt-1 '>
                {' '}{showFeedback ? (
                <div id={`${props.id}-feedback`} aria-live="polite" className="feedback text-sm pl-1 text-orange-600">
                    {meta.error ? meta.error : '✓'}
                </div>
                ) : null}
            </div>
    </div>
  );
};




const validationSchema = yup.object({

    name: yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Name is required')
        .matches(
          /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/,
          'Cannot contain special characters or numbers'),
    subject: yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Subject is required'),
            
    email: yup.string().email('Email must be valid')
        .required('Email is required'),

     message: yup.string()
        .min(3, 'Must be at least 3 characters')
        .required('Message is required')
        .max(499, 'Max 500 characters')
})

const ContactForm = () => {

    const [isForm, setForm] = useState(true)
    const [isConfirmation, setConfirmation] = useState(false)
     
  


    const formik = useFormik({


        initialValues: {
            name: '',
            subject: '',
            email: '',
            message: ''
        },
        validationSchema,
        onSubmit: (values) => {
            //api callet ved ekte skjema, vi konsoller bare submiten. Så vil typisk vøre async
            console.log(values)
       setForm(false) 
       setConfirmation(true)
        }
    });

    return ( 
        <>{isForm &&  
       <FormikProvider value={formik}>
         
        <form 
        onSubmit={formik.handleSubmit} 
        onChange={formik.handleChange} className="my-16 lg:mt-8">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
                <TextInputLiveFeedback 
                    label='Full name'
                    id='name'
                    name='name'
                    helpText='Write your full name'
                    type='text'
                    value={formik.values.name} />
            </div>
            <div className="sm:col-span-2">
                <TextInputLiveFeedback 
                    label='Email'
                    id='email'
                    name='email'
                    helpText='Your email'
                    type='email'
                    value={formik.values.email} />
            </div>
            <div className="sm:col-span-2">
                <TextInputLiveFeedback 
                    label='Subject'
                    id='subject'
                    name='subject'
                    helpText='What is your query about?'
                    type='text'
                    value={formik.values.subject} />
            </div>
            <div className="sm:col-span-2">
                <TextInputLiveFeedback 
                    label='How can we help you?'
                    id='message'
                    name='message'
                    helpText='How can we help you?'
                    value={formik.values.message}
                    type='text'
                    className='h-32 w-full border border-gray-200 p-2 rounded-md'/>
            </div>
           
        </div>
        <div className=" flex justify-center pt-12 lg:pt-4">
            <GreenBtnS type="submit" className="">Send message</GreenBtnS>
        </div>
    </form>
    
    </FormikProvider>}
    {isConfirmation && 
    <div className='md:h-40 w-full my-6 lg:my-12 lg:h-80 flex flex-col gap-8 items-start justify-center'>
        <p className='pTitle'>Your message has been sent</p>
        <p>We will get back to you as soon as we can!</p>
    </div>}
    </>)
}
 
export default ContactForm;