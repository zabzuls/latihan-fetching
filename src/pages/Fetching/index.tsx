'use client';

import  WordFunction from '@/Components/shared/WordFunction/wordFunction';
import React, { useEffect, useState } from 'react';
interface DataPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const FetchData = () => {
  const [datas, setData] = useState<DataPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <span className="loading loading-spinner text-secondary"></span>;

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Post Titles</h1>
      <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>
              {WordFunction(data.body,1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default FetchData;
