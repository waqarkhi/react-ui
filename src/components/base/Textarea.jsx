const Textarea = ({info}) => {
    const {name,text} = info;
  return (
    <>
        <textarea name={name} id={name} className="form-control px-0 mb-4" placeholder={text}></textarea>
    </>
  )
}

export default Textarea