type Props ={
  text:string
}

const Title = (props:Props) => {
  return <h1>{props.text}</h1>;
};

export default function Home() {
  return (
    <>
      <Title text="" />
    </>
  );
}
