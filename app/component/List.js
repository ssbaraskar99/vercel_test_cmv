'use client'
import React from 'react'
import useSWR from "swr";
import Fetcher from '../helpers/Fetcher';

const List = () => {
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    Fetcher
  );


  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}

export default List