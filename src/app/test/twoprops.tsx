export const TwoProps = async ({ data }: { data: any }) => {
  console.log('어디일까? ');

  const new_data = await data();

  return <div>{new_data}</div>;
};
