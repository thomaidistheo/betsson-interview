interface GreetingProps {
    greeting: string,
}

const HelloWorld: React.FC<GreetingProps> = ({ greeting }) => {
  return (
    <h2>{greeting}</h2>
  )
}

export default HelloWorld