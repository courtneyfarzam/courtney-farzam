import React from 'react';
import { About, Footer, Header, Projects, Skills, Testimonial } from './container';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <About />
            <Projects />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;