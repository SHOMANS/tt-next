'use client';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

const skills = ['html', 'css', 'js', 'ts', 'react', 'next', 'node'];

const Skills = () => {
  const [state, setState] = useState();
  return (
    <>
      <Head>
        <title>Anas Page</title>
      </Head>
      <div>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>
              <Link href={`/skills/${skill}`}>{skill}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
