/**
 * Component for fun facts show
 * @param FunFactProp
 */
type FunFactProp ={
    fact : string
}
const FunFact = (prop:FunFactProp) => {
  return (
    <div className="border-2 border-[#494d56] p-2 w-fit text-white text-center">{prop.fact}</div>
  )
}

export default FunFact