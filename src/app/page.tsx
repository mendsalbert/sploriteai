'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHero from '@/app/(server-components)/SectionHero';
import BgGlassmorphism from '@/components/BgGlassmorphism';
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox';
import ListingCarPage from './(car-listings)/listing-car/page';
import { useUser } from '@auth0/nextjs-auth0/client';
import { addUserData } from './reducersSlices/authReducer';
import { getUserPreference } from './reducersSlices/preferenceReducer';
import { useRouter } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { IconMessageChatbot, IconSchool } from '@tabler/icons-react';
import ReactGA from 'react-ga';
import useUserSubscription from '../utils/useUserSubscription';
import { getCourseHistory } from './reducersSlices/coursReducer';
import Head from 'next/head';
import getUserIdByEmail from '@/firebase/getEmail';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';

function PageHome() {
  ReactGA.initialize('G-40852TP7K2');

  useEffect(() => {
    window.addEventListener('beforeunload', clearLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

  const clearLocalStorage = () => {
    window.localStorage.removeItem('searchQuery');
  };

  const [isUserDataFetched, setIsUserDataFetched] = useState(false);
  const isCompleted = useSelector((state: any) => state.search.isCompleted);
  const preferences = useSelector((state: any) => state.preference?.preferences);
  const dispatch = useDispatch<any>();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isCompleted && ref.current) {
    }
  }, [isCompleted]);

  const { user, isLoading } = useUser();

  useEffect(() => {
    if (user && !isUserDataFetched) {
      dispatch(addUserData(user, user));
      dispatch(getUserPreference(user));
      setIsUserDataFetched(true);
    }

    const preference = {
      difficultyLevel: preferences?.preferences?.difficultyLevel,
      learningStyle: preferences?.preferences?.learningStyle,
    };

    localStorage.setItem('preference', JSON.stringify(preference));
    localStorage.setItem('sub', user?.sub);
  }, [user]);

  useEffect(() => {
    if (!user) {
      setIsUserDataFetched(false);
    }
  }, [user]);

  const courseHistory = useSelector((state: any) => state.course.courses);
  const uniqueCourses = courseHistory.filter((course: any, index: number) => {
    const currentCourseQuery = course.title.query;
    // Check if the current course query is the same as any previous course query
    const isFirstOccurrence = courseHistory.findIndex((prevCourse: any) => prevCourse.title.query === currentCourseQuery) === index;
    return isFirstOccurrence;
  });
  console.log('Unique courses:', uniqueCourses);

  useEffect(() => {
    dispatch(getCourseHistory(user));
  }, [user]);

  const router = useRouter();
  const { isSubscribed, isError } = useUserSubscription(user?.sub);

  if (uniqueCourses.length >= 15 && !isSubscribed) {
    alert('Queries execeded');
    router.push('/subscription');
  }
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    }
    localStorage.setItem('isSubscribed', isSubscribed);
  }, [user, router, isLoading]);

  useEffect(() => {
    if (user?.email_verified === false) {
      router.push('/confirm');
    }
  }, [user, router, isLoading]);
  console.log(user);

  useEffect(() => {
    // Check if user is logging in for the first time
    const isLoggedInForTheFirstTime = user && !localStorage.getItem('loggedInBefore');

    // Show the preference settings link only for first-time login
    if (isLoggedInForTheFirstTime) {
      router.push('/account-preference');

      alert('Welcome! Please set your preference settings.');
      // You can replace the alert with a modal or a link to the preference settings page
    }

    // Set the flag to indicate that the user has logged in before
    if (user) {
      // @ts-ignore
      localStorage.setItem('loggedInBefore', true);
    }
  }, [user]);

  useEffect(() => {
    const getuserid = async () => {
      const { result, error } = await getUserIdByEmail('pakariisbum@gmail.com');
      console.log(result);
    };
    getuserid();
  }, []);

  useEffect(() => {
    connectToMetamask();
  }, [user]);

  async function connectToMetamask() {
    // Detect the MetaMask provider
    const provider = (await detectEthereumProvider()) as any;

    if (provider) {
      // Request access to the user's MetaMask accounts
      await provider.request({ method: 'eth_requestAccounts' });

      // Create an ethers.js provider using MetaMask
      const ethersProvider = new ethers.providers.Web3Provider(provider);

      // Switch to the Mumbai network (testnet)
      const network = {
        chainId: '0x13881', // Chain ID: 80001 in hexadecimal
        chainName: 'Mumbai',
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC',
          decimals: 18,
        },
        rpcUrls: ['https://rpc-mumbai.maticvigil.com'], // Mumbai RPC URL
        blockExplorerUrls: ['https://mumbai.polygonscan.com'], // Mumbai block explorer URL
      };

      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [network],
      });

      // Get the signer (current account) from the provider
      const signer = ethersProvider.getSigner();

      // You can now use the signer to send transactions or interact with contracts
      console.log('Connected to MetaMask');
      console.log('Current account:', await signer.getAddress());

      localStorage.setItem('isConnected', 'true');
    } else {
      console.log('Metamask is not installed');
    }
  }

  return (
    <>
      <head>
        <title>Splorite Inc</title>
        <meta name='viewport' content='height=device-height ,width=device-width, initial-scale=1, user-scalable=no' />
        <link rel='icon' href='/image/logo.svg' className='w-12' type='image/x-icon' />
      </head>
      <main className='nc-PageHome  relative overflow-hidden'>
        {/* GLASSMOPHIN */}
        <BgGlassmorphism />
        <div className='container relative mb-24 space-y-24 lg:mb-28 lg:space-y-28'>
          {/* <p>fdsfadfd</p> */}
          {/* SECTION HERO */}
          <SectionHero className='pt-10 lg:pt-16 lg:pb-16' />
          {<ListingCarPage ref={ref} />}
        </div>
      </main>
    </>
  );
}

export default PageHome;
