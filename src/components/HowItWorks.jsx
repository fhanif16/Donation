import React from 'react';
import 'animate.css';

const HowItWorks = () => {
    const steps = [
        {
            title: 'Step 1: Donate',
            description:
                'Choose items you’d like to donate. These can include clothes, food, or other essentials. Visit our website to complete the donation form.',
                delayClass: 'animate__delay-1s',
        },
        {
            title: 'Step 2: Collection Points',
            description:
                'Drop off your donations at one of our collection points. Find the nearest point using our interactive map.',
                delayClass: 'animate__delay-2s',
        },
        {
            title: 'Step 3: Supported Divisions',
            description:
                'Your donations support families across multiple divisions: North, South, East, and West. Together, we make a difference.',
                delayClass: 'animate__delay-3s',
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-2">
            <div className="max-w-4xl w-full text-center">
                <h1 className="text-4xl font-bold mb-6 text-gray-800 animate__animated animate__fadeInDown">
                    How It Works
                </h1>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`bg-white shadow-lg rounded-lg p-6 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}
                        >
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {step.title}
                            </h2>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
       
    );
};

export default HowItWorks;
