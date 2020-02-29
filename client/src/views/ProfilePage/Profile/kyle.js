import React from 'react';
export default {
  backgroundImage: '',
  profileImg: 'https://i.imgur.com/qC2iaYa.jpg?2',
  name: 'Kyle Mitchell',
  role: 'Managing Partner',
  social: [
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/kyle-mitchell-56765b50'
    },
    {
      icon: 'youtube',
      link: 'https://www.youtube.com/channel/UCAKq4gSBG8aknnC4iVrI6fg'
    },
    {
      icon: 'Resume',
      link:
        'https://drive.google.com/file/d/1AkzYG9obV9Lsa6JTWlitH9bgDC_SL3I7/view?usp=sharing'
    }
  ],
  description:
    'My passion is in helping others reach their goals in all areas of life by doing things the right way and creating long lasting relationships based on trust and clarity',
  profileTabs: [
    {
      tabName: 'Biography',
      tabContent: [
        <p key="1234" style={{ textAlign: 'left' }}>
          <strong>About me: </strong> My passion is in helping others reach
          their goals in all areas of life by doing things the right way and
          creating long lasting relationships based on trust and clarity. I have
          experience with operations management; staff development; revenue
          generation; expense management; food & beverage operations; budgeting;
          sales; capital improvement projects; single family homes; buying and
          selling real estate; and operating boutique fitness studios.
        </p>,

        <p key="548tuijf" style={{ textAlign: 'left' }}>
          <strong>American Golf: </strong> Previously a Regional Manager for
          American Golf and have 15+ years of experience in operations
          management including overseeing more than $18 million in revenue and
          225+ team members. I began working for American Golf in 1997 and
          worked my way up from a cashier in high school to General Manager by
          the age of 21. I also serve on the board of Directors for the First
          Tee of Greater Pasadena where our mission is to impact the lives of
          young people from all walks of life by reinforcing values like
          integrity, respect and perseverance through educational programs that
          build character, instill life-enhancing values and promote healthy
          choices through the game of golf.
        </p>,
        <p key="98y9hug" style={{ textAlign: 'left' }}>
          <strong>Professional Sports:</strong> I played golf Professionally for
          a few years around California before working full-time for American
          Golf. I am a dog owner & lover, I enjoy cooking, traveling, fitness &
          sports. I currently live in Southern California and the thing I am
          most looking forward to this year is planning my wedding with my
          fiancé. The most important thing I have learned over the last 12
          months is how important it is to spend time and care for your family,
          nothing is more important than family. I am a big believer in a
          positive mindset, continued education, improving yourself day by day
          and taking massive action.
        </p>
      ]
    },
    {
      tabName: 'Real Estate',
      tabContent: [
        <p key="ain23234" style={{ textAlign: 'left' }}>
          <strong>Real Estate Investor:</strong> <span>I have been investing in income producing Real Estate since 2013, our company currently manages approximately $17M in multifamily assets in the Arizona markets.  I also own a portfolio of single family homes in 3 different markets. I am Managing Partner and Co-Founder of Limitless Estates, LLC, where our vision is to provide A class living to lower income housing by putting our residents first and instilling a sense of community while inspiring others to do the same. My goal is to add massive value to others while helping build generational wealth through Multifamily real estate investing.</span>
        </p>,
        <p key="re312412541" style={{ textAlign: 'left' }}>
          <strong>Real Estate Agent: </strong> <span>I am a licensed Realtor in California and have been buying and selling Real Estate since 2015. One of the ways I love to give back is by donating 20% of my commissions to the local charities of my client’s choice. My goal is to one day be able to donate 100% of my commissions back to local charities.</span>
        </p>
      ]
    },
    {
      tabName: 'Business Owner',
      tabContent: [
        <p key="23t23t" style={{ textAlign: 'left' }}>
          <strong>{'Club Pilates: '}</strong>
          {
            'I am a Club Pilates franchise owner in Southern California. Club Pilates was founded in San Diego in 2007 and has expanded across the nation, bringing Pilates to hundreds of thousands of people. In 2017, Club Pilates served up over 2.2 million workouts to their dedicated members. We believe that Pilates is the path to a fuller, more satisfying physical existence. We believe that being in control of your body helps you to be in control of your life. And best of all, we believe that you can start anytime! In 2016, Club Pilates was recognized as #31 in Entrepreneur Magazine’s Top New Franchise and most recently in 2017 as #361 in the Entrepreneur Franchise 500®.'
          }
        </p>
      ]
    }
  ]
};
