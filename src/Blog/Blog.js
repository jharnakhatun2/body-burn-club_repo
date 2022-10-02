import React from 'react';
import './Blog.css';


const Blog = () => {

    return (
        <div>
            <div className='exercise-card p-2 text-start blog-column my-5'>
                <div className="blog-component-padding p-2">
                    <h5 className='mt-2'>How does React work?</h5>
                    <div className="about">
                        <span> React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. At its very core, React basically maintains a tree for us. This tree is able to do efficient diff computations on the nodes. Think of our HTML code as a tree. In fact, that is exactly how the browser treats our DOM our rendered HTML on the browser. React allows us to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</span>
                    </div>
                </div>
            </div>

            <div className='exercise-card p-2 text-start blog-column my-5'>
                <div className="blog-component-padding p-2">
                    <h5 className='mt-2'>What are the differences between props and state?</h5>
                    <div className="about">
                        <span> The main differences between props and state: <br />
                        Components receive data from outside with props, whereas they can create and manage their own data with state. Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside). Props can only be passed from parent component to child (unidirectional flow). Modifying state should happen with the setState ( ) method.</span>
                    </div>
                </div>
            </div>

            <div className='exercise-card p-2 text-start blog-column my-5'>
                <div className="blog-component-padding p-2">
                    <h5 className='mt-2'>Mention some using area for React UseEffect hook?</h5>
                    <div className="about">
                        <span> The useEffect hook has superpowers that enable us to design our custom hooks. When a change occurs, it allows us to perform side effects in functional components. It allows data retrieval, DOM modification, and function execution each time a component renders.With the React useEffect hook, you can manage component lifecycle seamlessly without necessarily having to convert your functional based components into class based components.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;