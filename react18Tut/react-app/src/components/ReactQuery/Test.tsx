import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

function Test() {
  const fetchProjects = async ({ pageParam }: any) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_start=" +
        pageParam +
        "&_limit=10"
    );
    return res.json();
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return 2;
    },
    staleTime: 10 * 1000,
  });

  return status === "pending" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((post) => (
        <li key={post.id} className="list-group-item">
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </li>
      ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

export default Test;
