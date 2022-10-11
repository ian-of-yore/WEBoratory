import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../images/download.png'
import { Link } from 'react-router-dom'

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center py-2">
                                    <img
                                        className="block h-8 w-9 bg-white rounded-full mr-2"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                    <p className='text-white text-xl font-semibold'>WEBoratory</p>
                                </div>
                                <div className="hidden sm:ml-6 sm:block py-4">
                                    <div className="flex text-white">
                                        <Link to='/'>Home</Link>
                                        <Link className='mx-4' to='/blog'>Blog</Link>
                                        <Link to='/stats'>Statistics</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <Disclosure.Button>
                                <div className='flex flex-col text-white'>
                                    <Link to='/'>Home</Link>
                                    <Link className='my-2' to='/blog'>Blog</Link>
                                    <Link to='/stats'>Statistics</Link>
                                </div>
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}