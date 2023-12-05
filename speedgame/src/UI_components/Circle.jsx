function Circle({ id, clickHandler}) {
  return (
    //binding onclick to click handler to send the id number up the chain as an event
    <div className="circle" onClick={() => clickHandler(id)}>
  {/*   <div className="circle active"> */}
      <p>{id}</p>
    </div>
  );
}

export default Circle;
