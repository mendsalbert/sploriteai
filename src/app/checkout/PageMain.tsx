'use client';

import { Tab } from '@headlessui/react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import React, { FC, Fragment, useState } from 'react';
import visaPng from '@/images/vis.png';
import mastercardPng from '@/images/mastercard.svg';
import Input from '@/shared/Input';
import Label from '@/components/Label';
import Textarea from '@/shared/Textarea';
import ButtonPrimary from '@/shared/ButtonPrimary';
import StartRating from '@/components/StartRating';
import NcModal from '@/shared/NcModal';
import ModalSelectDate from '@/components/ModalSelectDate';
import converSelectedDateToString from '@/utils/converSelectedDateToString';
import ModalSelectGuests from '@/components/ModalSelectGuests';
import Image from 'next/image';
import { GuestsObject } from '../(client-components)/type';

export interface CheckOutPagePageMainProps {
  className?: string;
}

const CheckOutPagePageMain: FC<CheckOutPagePageMainProps> = ({ className = '' }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date('2023/02/06'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2023/02/23'));

  const [guests, setGuests] = useState<GuestsObject>({
    guestAdults: 2,
    guestChildren: 1,
    guestInfants: 1,
  });

  return (
    // <div className={`nc-CheckOutPagePageMain ${className}`}>
    //   <main className="container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row">
    //     <div className="w-full lg:w-3/5 xl:w-2/3 lg:pr-10 ">{renderMain()}</div>
    //     <div className="hidden lg:block flex-grow">{renderSidebar()}</div>
    //   </main>
    // </div>
    <></>
  );
};

export default CheckOutPagePageMain;
