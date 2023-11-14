import {
  // keepPreviousData,
  useInfiniteQuery,
  // useQuery,
} from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostQuery {
  // page: number; //Not used in infinite query.
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = ({ pageParam }: any) => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);
  };

  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastpage, pages) => {
      return lastpage.length ? pages.length + 1 : undefined;
    },
    staleTime: 10 * 1000,
  });

  // return useQuery<Post[], Error>({
  //   // /users/1/posts
  //   queryKey: ["posts", query],
  //   queryFn: fetchPosts,
  //   gcTime: 1000000,
  //   staleTime: 10 * 1000,
  //   placeholderData: keepPreviousData,
  // });
};

export default usePosts;
