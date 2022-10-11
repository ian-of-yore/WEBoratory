import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Blog = () => {
    return (
        <div className='w-8/12 mx-auto mt-20'>
            <h1 className='text-3xl font-bold mb-4'>Frequently Asked Questions</h1>
            <Accordion>
                <AccordionItem className='p-4 border-4'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='font-semibold text-xl pl-6'>
                            What is the purpose of React Router?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            React Router is an API for React applications. React Router uses component structure to call components, which display the appropriate information.
                            The main purpose of React Router is that is allows us to build a single-page web application with navigation without the page refreshing as the user navigates.
                            React Router, and dynamic, client-side routing system. By preventing a page refresh, and using Router or Link, the flash of a white screen or blank page is prevented.
                            This is one increasingly common way of having a more seamless user experience.

                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className='p-4 border-4'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='font-semibold text-xl pl-6'>
                            How does Context API works?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            The contecxt API of React allows one to share state across the entire app (or part of it) lightly and with ease.
                            It enables the developer to exchange unique details and assists in solving prop-drilling from all levels of application.
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className='p-4 border-4'>
                    <AccordionItemHeading>
                        <AccordionItemButton className='font-semibold text-xl pl-6'>
                            React useRef hook: What is it and How it works?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            The useRef Hook allows the developer to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
                            It can be used to access a DOM element directly. It offers the developer a much suitable alternate to useState and solves the problem of re-rendering that comes with using useState.
                            This useRef hook can be declared by using <br /> <code className='text-center text-lg'>const refContainer = useRef(initialValue);</code>. <br />
                            useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                            A common use case is to access a child imperatively. <br />
                            The main three features of useRef are:
                            <ol className='list-decimal pl-16 mt-4'>
                                <li>
                                    <span className='text-lg font-semibold'>It allows mutable values.</span>
                                </li>
                                <li>
                                    <span className='text-lg font-semibold'>Accessing DOM elements.</span>
                                </li>
                                <li>
                                    <span className='text-lg font-semibold'>Updating references restriction</span>
                                </li>
                            </ol>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;