const Input = ({info}) => {
  const {name,text,type} = info;
  return (
    <>
        <input type={type} id={name} name={name} placeholder={text} className="form-control px-0 mb-4" />
    </>
  )
}

export default Input