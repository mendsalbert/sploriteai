<p align="center">
  <a href="" title="Project Initiator">
    <img src="https://bafybeigu64zdz6razidtaayaz7gwdbliw6fdpelhssvbkkuaa3rmzz2fq4.ipfs.w3s.link/Group%204%20(5).png" width="60px" alt="Project Initiator"/>
  </a>
</p>
<h1 align="center">Splorite AI</h1>

<p align="center">
    <a href="https://youtu.be/jUT-sgjIfaQ" title="">🖥️ Video</a>
    .
    <a href="https://sploriteai.vercel.app/" title="">🔗 Website</a>
    ·
    <a href="https://github.com/mendsalbert/sploriteai" title="">📂 Repo</a>
    ·
    <a href="https://github.com/mendsalbert/sploriteai" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>

## Problem

In the realm of education, various obstacles impede the seamless and effective learning experience for individuals. These obstacles include lack of personalization, limited access to diverse learning resources, and complex processes for acquiring knowledge. As a result, learners face difficulties in finding trustworthy and efficient platforms to enhance their education and expand their understanding. Consequently, the traditional education landscape falls short in providing a seamless and rewarding learning experience for students of all backgrounds.

Splorite seeks to address these challenges by revolutionizing the way people learn. Our platform aims to personalize the learning experience, provide access to a wide range of educational resources, and simplify the process of acquiring knowledge. With Splorite, individuals can embark on a journey of tailored learning, breaking down complex topics into simple modules, and expanding their understanding through engaging videos, interactive examples, and comprehensive learning materials. We strive to create a seamless and rewarding educational experience for learners, empowering them to reach their full potential and make a lasting impact in their educational pursuits.

## Solution: Vidispark and its Features

To address these challenges and revolutionize the way people learn, Splorite offers a comprehensive solution that combines artificial intelligence and advanced technologies. Our platform leverages AI algorithms to personalize the learning experience for each individual user, ensuring that educational content is tailored to their unique needs, interests, and learning style. Whether you're studying math, science, languages, or any other subject, Splorite breaks down complex concepts into simple and digestible modules, making learning more accessible and enjoyable.

In addition to personalized content, Splorite incorporates advanced features such as video and image generation, providing users with interactive and engaging learning materials. Visual representations and multimedia elements enhance comprehension and retention, enabling learners to explore topics from different angles and expand their understanding.

To further support effective learning, Splorite includes an example section where users can access real-world examples and practical applications of the concepts they are studying. This bridges the gap between theory and practice, helping learners connect academic knowledge with real-life scenarios.

Moreover, Splorite fosters interactive learning through its chat section, featuring an AI-powered chatbot that engages users in meaningful conversations and provides instant feedback and clarification on various topics. This interactive element promotes active learning and encourages users to actively participate in their educational journey.

To ensure a seamless and rewarding experience, Splorite offers a subscription model with affordable pricing, granting users access to all features and continuous updates. This allows learners to fully immerse themselves in the platform and make the most of its educational resources.

By combining AI technology, multimedia content, interactive learning, and personalized modules, Splorite transforms the traditional education landscape and empowers users to take control of their learning journey. We aim to make education accessible, engaging, and effective for learners of all backgrounds, ultimately shaping a future where knowledge is personalized and learning is truly transformative.

In addition to our commitment to personalized learning, we are proud to integrate Chainlink Alarm Clock and Price Feed into our subscription model. By leveraging Chainlink's Alarm Clock functionality, we ensure timely and accurate billing cycles for our subscribers, guaranteeing a seamless experience when accessing our premium features. The integration of Chainlink Price Feed enables us to provide transparent and reliable pricing information, ensuring fair and up-to-date subscription rates for our users.

## Architecture and Technology Stack

Web3 is built using JavaScript. All data stored within the application is decentralized. User and creator details are stored on a ethereum blockchain.

Technology Stack & Tools:

    -IDE: Visual Studio Code
    -Web Front-end and Back-end: Next.js, React.js
    -Backend: Next.js
    -File Storage: IPFS
    -Subscription Model: Chainlink

A detailed tutorial on how to upload content to Vidispark will be linked in the video or accessible through a provided link.

Smart Contract Address - 0xdF3073768De7e417E55d764f881e144477d39b5e

## Prerequisite

- [Nodejs](https://nodejs.org/en// 'Node') Installed

- [Git](https://git-scm.com/ 'Git OFficial') Installed

- [npm](https://www.npmjs.com/ 'npm ') Installed

- [Hardhat](https://hardhat.org/ 'Hardhat ') Installed

- [chainlink](https://www.npmjs.com/package/@chainlink/contracts/ 'chainlink ') Installed

## Installation Steps

1. Clone the repository

```Bash
git clone https://github.com/mendsalbert/sploriteai
```

2. Change the working directory

```Bash
cd sploriteai
```

3. Start the local Hardhat node

```Bash
npx hardhat node
```

4. With the network running, deploy the contracts to the local network in a separate terminal window

```Bash
npx hardhat run scripts/deploy.js --network theta
```

5. Start the app

```Bash
npm run start
```

**🎇 You are Ready to Go!**

## Configuration

The chain ID should be 365. If you have a localhost rpc set up, you may need to overwrite it.

<p align="center" title="Project Initiator"><img src=
"https://i.ibb.co/9Hdk924/Screenshot-2023-06-04-at-10-19-55-PM.png" alt="Project Initiator"/></p>

To deploy to Polygon test or main networks, update the configurations located in hardhat.config.js to use a private key and, optionally, deploy to a private RPC like Infura.

```Bash
require('@nomiclabs/hardhat-waffle');
const privateKey = 'xx';
const projectId = 'xx';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 365,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
      network_id: 80001,
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

## Built with

- [Solidity](https://docs.soliditylang.org/en/v0.8.17/ 'Solidity'): as Main Coding Language for writing smart contract

- [ReactJs](https://reactjs.org/ 'React Js'): as Main Coding Language for Creating The UI components (Front End)

- [TailwindCss](https://tailwindcss.com/ 'Tailwind Css'): as Main Coding Language for styling UI components

- [IPFS](https://ipfs.tech/ 'IPFS'): For Storing of files

- [Web3 Storage](https://www.google.com/search?q=web3storage 'Web3 Storage'): For Storing of files

- [Github](https://github.com/ 'Github') : For Repo Storage and source code management

- [Git](https://git-scm.com/ 'Git') : For Version Control System

During our journey to develop Splorite, a revolutionary AI education platform, we encountered several insights and challenges. As we delved into the realm of personalized learning, we recognized the existing limitations and obstacles that learners face in traditional educational settings. Armed with a strong vision to transform the learning experience, we set out to build Splorite as a solution to these challenges.

One of the key learnings was the need for personalized learning experiences. We discovered that learners often struggle with a one-size-fits-all approach in traditional education, where content is not tailored to individual needs and learning styles. This drove us to develop advanced AI algorithms that personalize the learning journey for each user, breaking down complex topics into simple modules and providing tailored content based on individual preferences and interests.

Additionally, we realized that learners crave interactive and engaging learning materials. Static textbooks and lectures often fail to captivate and inspire, hindering the learning process. To address this, we incorporated cutting-edge technologies such as video and image generation into Splorite, allowing users to expand their learning experience with captivating multimedia content. This approach promotes active learning and enhances comprehension and retention.

As we embarked on our mission, we encountered challenges in integrating AI technologies and ensuring seamless user experiences. We invested significant time and effort into refining our algorithms and optimizing the performance of Splorite to provide the best possible learning outcomes. We also encountered technical complexities in generating dynamic and personalized content for a large user base, but through continuous iteration and improvement, we overcame these challenges.

Throughout our journey, we remain committed to providing a seamless, personalized, and engaging learning experience for users of Splorite. We believe that education should be accessible, enjoyable, and tailored to individual needs. By harnessing the power of AI and advanced technologies, we aim to empower learners worldwide to unlock their full potential and make a positive impact in their educational pursuits.

With Splorite, learners can embark on a transformative learning journey, where knowledge is personalized, engaging, and empowering. We strive to shape a future where education transcends boundaries and enables individuals to thrive in an ever-evolving world. Join us on this exciting adventure and experience the power of personalized learning with Splorite.

## What's next for Vidispark

As Splorite continues to revolutionize the education landscape, we have an exciting roadmap for the future. Here's a glimpse of what's next:

- Expansion of Content: We are constantly working to expand and enhance our content library across various subjects and disciplines. Our team of experts and educators is dedicated to curating high-quality, comprehensive, and up-to-date educational materials to cater to the diverse needs of our users.

- Advanced AI Features: We are investing in cutting-edge AI technologies to further personalize the learning experience on Splorite. Our goal is to leverage machine learning and natural language processing to deliver even more tailored content, adaptive assessments, and intelligent recommendations for each individual user.

- Collaborations and Partnerships: We are actively seeking partnerships with educational institutions, content providers, and subject matter experts to enrich our platform and bring additional expertise and resources to our users. Collaborations will enable us to offer a broader range of educational content and foster a vibrant community of learners.

- Mobile App Development: We recognize the importance of mobile accessibility and convenience. Therefore, we are actively developing a mobile application for Splorite, allowing users to access our platform anytime, anywhere, from their smartphones or tablets. The mobile app will provide a seamless and user-friendly experience for on-the-go learning.

- Gamification and Rewards: We believe in making learning engaging and motivating. In the near future, we plan to introduce gamification elements and rewards systems to Splorite. Users will earn badges, achievements, and virtual rewards as they progress in their learning journey, fostering a sense of accomplishment and encouraging continuous growth.

- Community Features: We aim to build a strong and supportive learning community within Splorite. We will introduce features such as discussion forums, study groups, and collaboration tools, enabling users to connect, share knowledge, and learn from each other. The power of community-driven learning will enhance the overall learning experience on Splorite.

- Integration of Emerging Technologies: We closely monitor the latest advancements in technology and educational trends. As emerging technologies such as virtual reality (VR) and augmented reality (AR) gain traction, we plan to integrate these immersive technologies into Splorite, offering an interactive and immersive learning experience.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

- Fork the Project

- Create your Feature Branch (git checkout -b feature/AmazingFeature)

- Commit your Changes (git commit -m 'Add some AmazingFeature')

- Push to the Branch (git push origin feature/AmazingFeature)

- Open a Pull Request
