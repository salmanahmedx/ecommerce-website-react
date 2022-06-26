import React from 'react';
import Hero from '../hero/hero';
import PopularCollection from '../popularCollection/popularCollection';
import Blog from '../blog/blog';

const home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularCollection></PopularCollection>
            <Blog></Blog>
        </div>
    );
};

export default home;