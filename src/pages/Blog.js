import React from 'react';
import PageHero from '../components/PageHero';
import HomeBookNow from '../components/HomeBookNow';
import BlogInfo from '../components/BlogInfo';

export default class Blog extends React.Component {
  render() {
    return (
      <div>
        <PageHero title="NEWS & UPDATES" subTitle="Blog" />

        <BlogInfo
          Subtitle="FEABUARY 2020"
          title="ALL TYPES OF BEAUTY TREATMENTS HERE"
          content="Massage for the body is a popular beauty treatment, with various
              techniques offering benefits to the skin (including the
              application of beauty products) and for increasing mental
              well-being. Hair removal is offered at some beauty salons through
              treatments such as waxing and threading. Some beauty salons style
              hair instead of going to a separate hair salon, and some also
              offer sun tanning. Other treatments of the face are known as
              facials. Specialized beauty salons known as nail salons offer
              treatments such as manicures and pedicures for the nails. A
              manicure is a treatment for the hands, incorporating the
              fingernails and cuticles and often involving the application of
              nail polish, while a pedicure involves treatment of the feet,
              incorporating the toenails and the softening or removal of
              calluses."
        />
        <BlogInfo
          Subtitle="SEPTEMBER 2019"
          title="WELCOME TO BE-STYLISH"
          content="Welcome to our website! We are really happy to launch our brand
              new e-commerce platform. - zeiq team"
        />
        <HomeBookNow />
      </div>
    );
  }
}
