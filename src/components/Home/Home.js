import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const quizTopics = useLoaderData();
    return (
        <div>
            <HomeHeader></HomeHeader>
            <div className='grid sm:grid-cols-4 gap-8 my-16 w-11/12 mx-auto'>
                {
                    quizTopics.data.map(quizTopic => <QuizTopic key={quizTopic.id} quizTopic={quizTopic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;