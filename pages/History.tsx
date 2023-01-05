import type { GetStaticPropsResult, NextPage } from 'next'
import Link from 'next/link';
import Button from '../components/Buttons/Button';
import Icon from '../components/Buttons/Icon';
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects';
import { getSortedPostsData, PostData } from "../lib/posts";
import PostButton from '../components/Buttons/PostButton';
import { IMAGES, SITE_URL } from "../lib/constants";
import { beanstalk_versions } from "../lib/projectlinks";

// Metadata
const TITLE = `History`;
const DESC  = `Version History from Publius.`;

const History {

  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESC}
        openGraph={{
          url: `${SITE_URL}/history`,
          title: TITLE,
          description: DESC,
          type: "article",
          images: [
            {
              url: IMAGES.BASIC_META,
              width: 1200,
              height: 628,
              type: 'image/jpeg',
            }
          ],
          site_name: 'Publius',
        }}
        twitter={{
          handle: '@isthispublius',
          cardType: 'summary_large_image',
          site: '@isthispublius'
        }}
      />
      <Wrapper variant="default">
        <div className="space-y-6">
          <div className="sm:flex sm:flex-row block items-center justify-between sm:space-x-3 sm:space-y-0 space-y-2">
            <h1 className="text-4xl font-normal leading-[3.5rem] text-[25px]">
              Version History
            </h1>
          </div>
          <div className="flex flex-col space-y-4">
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default History
