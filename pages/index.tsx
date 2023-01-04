import type { GetStaticPropsResult, NextPage } from 'next'
import Link from 'next/link';
import Button from '../components/Buttons/Button';
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import Wrapper from '../components/Wrapper';
import Projects from '../components/Projects';
import { getSortedPostsData, PostData } from "../lib/posts";
import PostButton from '../components/Buttons/PostButton';
import { IMAGES, SITE_URL } from "../lib/constants";

type BlogProps = {
  allPostsData: PostData[]
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// Metadata
const TITLE = `Blog | Publius`;
const DESC  = `Posts from Publius.`;

const Home: NextPage<BlogProps> = ({ allPostsData }) => {
  // const [filter, setFilter] = useState(null);
  const tags = allPostsData.map(post => post.tag);
  const uniqueTags = Array.from(new Set(tags)).sort();

  // const updateFilter = (e: any) => {
  //   setFilter(e.target.value === "All" ? null : e.target.value);
  // }

  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESC}
        openGraph={{
          url: `${SITE_URL}/blog`,
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
      <div className="flex flex-col items-center px-4 py-8 max-w-2xl mx-auto justify-center" style={{ paddingBottom: '0px'}}>
        <div className="text-left text-2xl py-12">
          <em>Publius' Website</em>
        </div>
        <div className="space-y-6 md:space-y-12">
          <blockquote className="text-left space-y-4">
            <div className="text-left text-l">
              <em>“They can’t stop me, even if they stopped me.”</em><br/>
            </div>
            <div className="text-sm">
              <p className="text-neutral-400">
                — Lil Wayne, Tha Carter III, 2008</p>
            </div>
          </blockquote>
        </div>
      </div>
      <Projects />
      <Wrapper variant="default">
        <div className="space-y-6">
          <div className="sm:flex sm:flex-row block items-center justify-between sm:space-x-3 sm:space-y-0 space-y-2">
            <h1 className="text-4xl font-normal leading-[3.5rem] text-[25px]">
              Blog
            </h1>
          </div>
          <div className="flex flex-col space-y-4">
            {(allPostsData.map(({ id, title, subtitle, date, tag }) => (
                <PostButton
                  key={id}
                  href={`/blog/${id}/`}
                  title={title}
                  date={date}
                  tag={tag}
                  subtitle={subtitle}
                />
              )))
            }
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Home
