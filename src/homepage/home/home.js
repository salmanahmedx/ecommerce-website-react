import React from 'react';
import Hero from '../hero/hero';
import PopularCollection from '../popularCollection/popularCollection';
import Blog from '../blog/blog';
import FeaturedCollection from '../featuredCollection/featuredCollection';

const home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturedCollection></FeaturedCollection>
            <PopularCollection></PopularCollection>
            <Blog></Blog>
        </div>
    );
};

export default home;