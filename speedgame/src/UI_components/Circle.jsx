function Circle({ id, clickHandler, current}) {
  return (
    //binding onclick to click handler to send the id number up the chain as an event
    <div className={`circle ${current ? 'active' : ''}`} onClick={() => clickHandler(id)}>
  {/*   <div className="circle active"> */}
      
    </div>
  );
}

export default Circle;
