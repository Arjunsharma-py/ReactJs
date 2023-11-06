import React from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  // const [page, setPage] = useState(1); //Not used in infinte query.
  const { data, error, isLoading, fetchNextPage } = usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        className="form-select mb-3"
        onChange={(event) => setUserId(parseInt(event.target.value))}
      >
        <option value="">Select User</option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
      </select> */}
      <ul className="list-group">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      {/* <button
        disabled={page === 1}
        className="btn btn-primary m-3"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button className="btn btn-primary m-3" onClick={() => setPage(page + 1)}>
        Next
      </button> */}
      <button className="btn btn-primary" onClick={() => fetchNextPage()}>
        Load more
      </button>
    </>
  );
};

export default PostList;
