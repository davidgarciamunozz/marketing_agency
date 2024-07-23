import {connect} from 'react-redux';
import Layout from 'hocs/layouts/Layout';
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';
import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';
import Cookies from 'js-cookie';



function OptInCTA () {

  const [formData, setFormData]=useState({
    email:''
})

const {
    email
} = formData

const onChange=e=>{
    setFormData({...formData, [e.target.name]: e.target.value})
}

const [loading, setLoading]=useState(false)

const navigate = useNavigate()
const onSubmit=(e)=>{
    e.preventDefault()

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const formData = new FormData()
    formData.append('email', email)
    formData.append('tag', 1)
    formData.append('list', 1)

    const fetchData = async () => {
        setLoading(true);

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/opt-in`,
        formData,
        config)

        if(res.status === 200){
            setTimeout(()=>{
                navigate('/thank-you')
            },1000)
        }else{
            alert('Error sending message')
        }
    }
    fetchData()
}

    return (
        <Layout>
            <Navbar />
            <div className='pt-20'>
            <div class="flex items-center justify-center">
                <div class="py-20 rounded shadow-lg ">
                    <div class="flex flex-col gap-2 items-center space-y-2">
                         <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                <h1 class="text-4xl font-bold">Thank You !</h1>
                <p className='text-center'>Thank you for your interest! Check your email for a link to the guide.</p>
                    <Link to="/"
                class="inline-flex items-center px-4 py-2 text-white bg-orange-600 border border-orange-600 rounded-full hover:bg-orange-700 focus:outline-none focus:ring">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span class="text-sm font-medium">
                    Home
                </span>
                    </Link>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </Layout>
    )
}

const mapStateToProps = state => ({}) 
export default connect(mapStateToProps,{})(OptInCTA)