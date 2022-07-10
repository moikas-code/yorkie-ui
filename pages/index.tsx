import type {NextPage} from 'next';
import Head from 'next/head';
import {Fragment, useState, useEffect} from 'react';
import NavButton from '../islands/NavButton';
import Button from '../islands/Button';
import WalletProvider from '../islands/WalletProvider';
import {login} from '../helpers';
function truncateAddress(address) {
  try {
    return `${address.substring(0, 6).toLowerCase()}...${address
      .substring(38, 42)
      .toLowerCase()}`;
  } catch (error) {
    console.log(`truncateAddress(): ${error}`);
  }
}
export default function Home() {
  return (
    <WalletProvider>
      {({connected, address}: any) => {
        console.log('connected', connected);
        return (
          <>
            <style global jsx>{`
              @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css');
              body {
                background-color: #042493;
              }
              .overflow-x-scroll {
                overflow-x: scroll;
              }
              .z-1 {
                z-index: 1;
              }
              .z-2 {
                z-index: 2;
              }
              .fnt-stroke {
                text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
                  1px 1px 0 #000;
              }
              .fnt-fff {
                color: #fff;
              }
              .fnt-ACDC0A-hover:focus,
              .fnt-ACDC0A-hover:hover {
                color: #acdc0a;
              }
              .border-ACDC0A {
                border-color: #acdc0a;
              }
              .navbar {
                min-height: 50px;
              }
              .rmp-card {
                min-height: 250px;
                min-width: 325px;
                max-width: 325px;
              }
              .rmp-card-body {
                min-height: 175px;
              }

              .s1 {
                min-height: 800px;
              }
            `}</style>

            <div
              id='home'
              className={'navbar p-2 d-flex flex-row justify-content-between'}>
              <NavButton className={'fnt-fff fnt-ACDC0A-hover'} path='home'>
                Yorkie Pups
              </NavButton>
              <div className='d-flex flex-row'>
                <NavButton path='team' className={'fnt-fff fnt-ACDC0A-hover'}>
                  Team
                </NavButton>
                <NavButton
                  path='roadmap'
                  className={'fnt-fff fnt-ACDC0A-hover'}>
                  Roadmap
                </NavButton>
                <NavButton
                  path='yorkieverse'
                  className={'fnt-fff fnt-ACDC0A-hover'}>
                  Yorkieverse
                </NavButton>

                {!connected ? (
                  <Button
                    onClick={() => {
                      login().then(() => window.location.reload());
                    }}
                    className={'fnt-fff fnt-ACDC0A-hover'}>
                    Connect Wallet
                  </Button>
                ) : (
                  <Button
                    className={
                      'd-flex flex-row justify-content-center align-items-center fnt-fff fnt-ACDC0A-hover'
                    }>
                    {truncateAddress(address)}
                  </Button>
                )}
              </div>
            </div>

            <div
              className={
                's1 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden'
              }>
              <div
                className={
                  'z-1 d-flex flex-column justify-content-center align-items-center'
                }>
                <span className='h2 fnt-fff fnt-stroke'>Join The</span>
                <span className='display-1 h2 fnt-fff fnt-stroke'>
                  Yorkieverse
                </span>
                <span className='h2 fnt-fff fnt-stroke'>Today!</span>
              </div>
              <div className='d-flex flex-row justify-content-center position-absolute top-50 start-50 translate-middle overflow-hidden'>
                <img src={'/yorkie-0.png'} />
                <img src={'/yorkie-1.png'} />
                <img src={'/yorkie-2.png'} />
                <img src={'/yorkie-3.png'} />
              </div>
            </div>
            <div
              id='roadmap'
              className={
                's1 d-flex flex-column justify-content-start position-relative overflow-hidden'
              }>
              <span className='h2 fnt-fff fnt-stroke mx-auto mb-5'>
                The Roadmap
              </span>
              <div className='d-flex flex-row mx-2 mx-lg-5 overflow-x-scroll'>
                {/* 0% */}
                <div
                  className={
                    'zero-prcnt rmp-card p-2 m-3 d-inline-flex flex-column justify-content-between rounded border border-ACDC0A '
                  }>
                  <span className='h3 fnt-fff fnt-stroke'>0%</span>
                  <div className={'rmp-card-body d-flex flex-column'}>
                    <span className='fnt-fff fnt-stroke'>Avatar Creation</span>
                    <span className='fnt-fff fnt-stroke'>
                      Finalization of traits
                    </span>
                    <span className='fnt-fff fnt-stroke'>Smart Contract </span>
                    <span className='fnt-fff fnt-stroke'>
                      Community Building
                    </span>
                    <span className='fnt-fff fnt-stroke'>
                      Collaboration and Marketing
                    </span>
                    <span className='fnt-fff fnt-stroke'>
                      PFP and Game Launch
                    </span>
                  </div>
                </div>
                {/* 20% */}
                <div
                  className={
                    'twenty-prcnt rmp-card p-2 m-3 d-inline-flex flex-column justify-content-between rounded border border-ACDC0A '
                  }>
                  <span className='h3 fnt-fff fnt-stroke'>20%</span>
                  <div className={'rmp-card-body d-flex flex-column'}>
                    <span className='fnt-fff fnt-stroke'>
                      Founders Raffle - (Early Discord Members)
                    </span>
                    <span className='fnt-fff fnt-stroke'>
                      Community Manager
                    </span>
                    <span className='fnt-fff fnt-stroke'>
                      Rarity tools listing
                    </span>
                  </div>
                </div>
                {/* 50% */}
                <div
                  className={
                    'fifty-prcnt rmp-card p-2 m-3 d-inline-flex flex-column justify-content-between rounded border border-ACDC0A '
                  }>
                  <span className='h3 fnt-fff fnt-stroke'>50%</span>
                  <div className={'rmp-card-body d-flex flex-column'}>
                    <span className='fnt-fff fnt-stroke'>
                      Donate to Community Picked Charity
                    </span>
                  </div>
                </div>
                {/* 60% */}
                <div
                  className={
                    'sixty-prcnt rmp-card p-2 m-3 d-inline-flex flex-column justify-content-between rounded border border-ACDC0A '
                  }>
                  <span className='h3 fnt-fff fnt-stroke'>60%</span>
                  <div className={'rmp-card-body d-flex flex-column'}>
                    <span className='fnt-fff fnt-stroke'>
                      Youtube Channel to Host Events
                    </span>
                    <span className='fnt-fff fnt-stroke'>
                      1/1 First Artist Collaboration (50% of Income Goes to
                      Community Wallet)
                    </span>
                    <span className='fnt-fff fnt-stroke'>Meme Challenge</span>
                  </div>
                </div>
                {/* 70% */}
                <div
                  className={
                    'seventy-prcnt rmp-card p-2 m-3 d-inline-flex flex-column justify-content-between rounded border border-ACDC0A '
                  }>
                  <span className='h3 fnt-fff fnt-stroke'>70%</span>
                  <div className={'rmp-card-body d-flex flex-column'}>
                    <span className='fnt-fff fnt-stroke'>Merch Launch</span>
                    <span className='fnt-fff fnt-stroke'>
                      1/1 First Artist Collaboration
                    </span>
                    <span className='fnt-fff fnt-stroke'>
                      (T-Shirt, Stickers, Hats)
                    </span>
                  </div>
                </div>
                {/* 90% */}
                <div
                  className={
                    'ninety-prcnt rmp-card p-2 m-3 d-inline-flex flex-column justify-content-between rounded border border-ACDC0A '
                  }>
                  <span className='h3 fnt-fff fnt-stroke'>90%</span>
                  <div className={'rmp-card-body d-flex flex-column'}>
                    <span className='fnt-fff fnt-stroke'>
                      Setup of the Community Wallet
                    </span>
                    <span className='fnt-fff fnt-stroke'>
                      (+ permanent 2% royalties from secondary sales)
                    </span>
                  </div>
                </div>
                {/* 100% */}
                <div
                  className={
                    'onehundred-prcnt rmp-card p-2 m-3 d-inline-flex flex-column justify-content-between rounded border border-ACDC0A '
                  }>
                  <span className='h3 fnt-fff fnt-stroke'>100%</span>
                  <div className={'rmp-card-body d-flex flex-column'}>
                    <span className='fnt-fff fnt-stroke'>
                      Helping 10 Community Picked Artists Mint and Promote their
                      Work
                    </span>
                    <span className='fnt-fff fnt-stroke'>
                      3D Figures (Sent to 99 Community Members)
                    </span>
                  </div>
                </div>
              </div>
              <div className='px-3 fnt-fff d-flex flex-row align-items-center mx-5 overflow-x-scroll'>
                Scroll for more info{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-arrow-right ms-2'
                  viewBox='0 0 16 16'>
                  <path
                    fillRule='evenodd'
                    d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
                  />
                </svg>
              </div>
            </div>
          </>
        );
      }}
    </WalletProvider>
  );
}
