const Button = ({info}) => {
  const {name,text,type} = info;
  return (
    <>
        <button type={type} id={name} className="btn btn-primary w-100">{text}</button>
    </>
  )
}

export default Button