import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom";
import axios from "axios";
import { CircleLoader } from 'react-spinners';

function Contact () {
  useEffect(() => {
    window.scrollTo(0, 0)
  } , [])

  const [enabled, setEnabled] = useState(false)

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: ''
  })

  const { 
    name, 
    email, 
    phone, 
    subject, 
    message, 
    budget } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    
    if (enabled) {
      setLoading(true);

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('subject', subject);
      formData.append('message', message);
      formData.append('budget', budget);

      const fetchData = async () => {
         const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`, formData, config);

         if (res.status === 200) {
           setLoading(false)
           setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            budget: ''
           })
           alert('Message sent successfully')
      } else {
        setLoading(false)
        alert('An error occured. Please try again')
      }
    }
      fetchData();
    }else {
      alert('Please accept the terms of service and privacy')
    }
  }


  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Boomslag</title>
        <meta name="description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
        <meta name="keywords" content="marketing, branding, web design, creative agency" />
        <meta name="author" content="Boomslag" />
        <meta name="publisher" content="Boomslag" /> 
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://boomslag.com" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Boomslag | Marketing Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boomslag.com" />
        <meta property="og:image" content="https://boomslag.com/images/boomslag-logo.png" />
        <meta property="og:description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
        <meta property="og:site_name" content="Boomslag" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@boomslag" />
        <meta name="twitter:title" content="Boomslag | Marketing Agency" />
        <meta name="twitter:description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
        <meta name="twitter:image" content="https://boomslag.com/images/boomslag-logo.png" />
       </Helmet>
      <Navbar />
      <div className="pt-20">
      <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-14 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
              arcu.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">support@example.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-14 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">

              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e=>onChange(e)}
                  required
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={e=>onChange(e)}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">+</span>
                    </div>
                    <input
                    type="number"
                    name="phone"
                    value={phone}
                    required
                    onChange={e=>onChange(e)}
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="51 999 123 456"
                    aria-describedby="price-currency"
                    />
                </div>
              </div>

              <div>
                <label  className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={e=>onChange(e)}
                  required
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Subject message"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={e=>onChange(e)}
                  rows={4}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Budget
                </label>
                <select
                    name='budget'
                    onChange={e=>onChange(e)}
                    value={budget}
                    className="block w-full pl-3 pr-10 rounded-md text-base border text-gray-500 border-gray-300 "
                >
                    <option value="" className="text-gray-400">Select a Budget (Optional)</option>
                    <option value="0-5k" className="text-gray-600">$0 - 5000</option>
                    <option value="5-10k" className="text-gray-600">$5,000 - 10,000</option>
                    <option value="10-25k" className="text-gray-600">$10,000 - 25,000</option>
                </select>
              </div>

              <div className=" py-5 ">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <div className="ml-4 mt-2">
                    <p className="leading-6 text-gray-500">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-orange-500 mr-4"
                    >
                      <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                    </Switch>
                      I accept the <span className="font-medium"><Link to="/terms">Terms of service </Link></span> and <span className="font-medium"><Link to="privacy">Privacy Policy</Link>  </span>.
                      </p>
                  </div>
                  <div className="ml-4 mt-2 flex-shrink-0">
                    {
                      loading ? 
                      <div
                        className="relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-4 py-3 text-lg font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                          <CircleLoader loading={loading} size={15} color="#ffffff"/>
                      </div>
                      :
                    <button
                      type="submit"
                      className="relative inline-flex items-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>

                    }
                  </div>
                </div>
             </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Contact;