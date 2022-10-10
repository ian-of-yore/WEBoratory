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
                            Under the hood React works with a virtual DOM (Document Object Model) where it keeps track of
                            the HTML contents as a tree and runs diff computations on the nodes. Whenever React detects a
                            change in the Virtual DOM, it checks where the change happened in the Actual DOM by using diff
                            algorithm and then changes just that certain portion of the DOM. Thus making the overall process
                            super fast compared to other frameworks.
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
                            Props in React.js are used to pass data from one component to another. Whereas, state is used
                            to store and set data for a certain component. It can't be used to pass data from component to
                            componenet. The state works locally for a certain component. Another major difference between props
                            and state is that props are read only, meaning they are immutable, they can't be changed. In contrast,
                            state is mutable, they can be changed. Furthermore, state changes can be asynchronous.
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
                            There are 5 other uses of useEffect other than fetching API data. They are:
                            <ol>
                                <li><span className=''>Validating input field:</span> Whilst the input is being stored in a state using useState,
                                    the validation takes place every time the input changes, giving immediate feedback to the user.</li>
                                <li><span className=''>Live filtering:</span> useEffect can be used to filter an array "on the fly" by typing letters
                                    into an input element.</li>
                                <li><span className=''>Trigger animation on new array value:</span> useEffect hook can also be used to trigger an animation on a
                                    shopping cart as a side effect of adding a new product to it.</li>
                                <li><span className=''>Fetched API data update:</span> useEffect can trigger a state update due to an updated fetch() call.
                                    by sending the fetched data to a child component, and whenever that data is changed,
                                    the child component re-process it.</li>
                                <li><span className=''>Updating fetched API data based on Time Dependency:</span> useEffect can be used to fetch new data from an API every (n) seconds.
                                    The child component useEffect receives the time as dependency and every time that dependency changes, a new fetch() is triggered.</li>
                            </ol>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;