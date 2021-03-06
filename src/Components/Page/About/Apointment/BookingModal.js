import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment,setTreaatment}) => {
  const { name, slot } = treatment;

const handelBooking=event=>{
  event.preventDefault();
  const slot =event.target.slot.value 
  const name = event.target.name.value;
  console.log(name,slot);
  setTreaatment(null)
}

  return (
    <div>

      <input type="checkbox" id="booking-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="booking-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">Booking for :{name}</h3>
          <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
            <input type="text" name='slot' class="input input-bordered w-full max-w-xs" />
            <select class="select select-bordered w-full max-w-xs">
              {
                slot.map(sol=><option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" placeholder="Type Your name"name='name' class="input input-bordered w-full max-w-xs" />
            <input type="email" name='email' placeholder="Type Your email"  class="input input-bordered w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Type Your Phone" class="input input-bordered w-full max-w-xs" />
            <input type="submit" value='submit' class="input input-bordered w-full max-w-xs btn btn-secondary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;