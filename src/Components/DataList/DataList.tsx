import React, { useEffect, useState } from "react";

interface DataPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataList = () => {
  const [dataList, setDataList] = useState<DataPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setDataList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="loader bg-blue-500 p-3 rounded-full flex space-x-3">
          <span className="block w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span className="block w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span className="block w-2 h-2 bg-white rounded-full animate-bounce"></span>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                Data Title
              </th>
              <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                Data Body
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white truncate">
                  {index + 1}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white truncate">
                  {data.title}
                </td>
                <td className="px-6 py-4 hidden sm:table-cell truncate">
                  {data.body.length > 50
                    ? `${data.body.substring(0, 50)}...`
                    : data.body}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataList;
