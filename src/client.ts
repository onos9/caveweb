import { HoudiniClient, type RequestHandler } from "$houdini";

const requestHandler: RequestHandler = async ({
  fetch,
  text = "",
  variables = {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  metadata,
}) => {
  const url = "http://localhost:8000/api/query ";
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  return await result.json();
};

export default new HoudiniClient(requestHandler);
