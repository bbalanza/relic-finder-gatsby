// Credit to https://bradgarropy.com/blog/mocking-gatsby-image for this amazing mock
const React = require('react');
const originalModule = jest.requireActual('gatsby-plugin-image');
const mockImage = ({ imgClassName, ...props }) =>
        React.createElement('img', {
            ...props,
            className: imgClassName,
            image: 'test.png'
        })

module.exports = {
        __esModule: true,
        ...originalModule,
        GatsbyImage: jest.fn().mockImplementation(mockImage),
        StaticImage: jest.fn().mockImplementation(mockImage),
};