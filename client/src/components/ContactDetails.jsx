import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, ClockIcon} from '@heroicons/react/24/outline'
import Form from './Form';

const ContactDetails = () => {
  const [contactData, setContactData] = useState({})

  const apiContact = process.env.REACT_APP_API_URL_CONTACT;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiContact);
        setContactData(response.data)
      } catch (error) {
        console.log('error fetching contact data:', error);
      }
    }
    fetchData()
  }, []);

      return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid lg:max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg lg:h-screen">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">{contactData.header}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {contactData.body}
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only"></span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  {contactData.postalAddress}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900">
                    {contactData.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:hello@example.com" className="hover:text-gray-900">
                    {contactData.email}
                  </a>
                </dd>
              </div>
                           <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Business Hours</span>
                  <ClockIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:hello@example.com" className="hover:text-gray-900">
                    {contactData.businessHours}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Form />
      </div>
    </div>
    );
}

export default ContactDetails;