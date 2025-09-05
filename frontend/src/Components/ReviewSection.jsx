import React from 'react'

const ReviewSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
 
         <article className="rounded-2xl border p-5 shadow-sm bg-white ">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-neutral-500">Rating</span>
      <span className="text-sm font-semibold">5/5 ⭐⭐⭐⭐⭐</span>
    </div>
    <h3 className="mt-3 text-lg font-semibold">User: Aditi Verma</h3>
    <p className="mt-2 text-neutral-700 ">
      Smooth checkout and fast delivery. Product matched the photos exactly. Will buy again.
    </p>
  </article>

  
  <article className="rounded-2xl border p-5 shadow-sm bg-white ">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-neutral-500">Rating</span>
      <span className="text-sm font-semibold">4/5 ⭐⭐⭐⭐☆</span>
    </div>
    <h3 className="mt-3 text-lg font-semibold">User: Rohan Das</h3>
    <p className="mt-2 text-neutral-700 ">
      Great quality for the price. Packaging could be better, but overall a solid purchase.
    </p>
  </article>

  
  <article className="rounded-2xl border p-5 shadow-sm bg-white ">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-neutral-500">Rating</span>
      <span className="text-sm font-semibold">4.5/5 ⭐⭐⭐⭐✰</span>
    </div>
    <h3 className="mt-3 text-lg font-semibold">User: Meera K.</h3>
    <p className="mt-2 text-neutral-700 ">
      Fit was perfect and fabric feels premium. Minor delay in shipping, but support was responsive.
    </p>
  </article>

 
  <article className="rounded-2xl border p-5 shadow-sm bg-white 0">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-neutral-500">Rating</span>
      <span className="text-sm font-semibold">5/5 ⭐⭐⭐⭐⭐</span>
    </div>
    <h3 className="mt-3 text-lg font-semibold">User: Vikram Singh</h3>
    <p className="mt-2 text-neutral-700 0">
      Exactly as described. Clean design, true-to-size, and the customer service was top-notch.
    </p>
  </article>

  
  <article className="rounded-2xl border p-5 shadow-sm bg-white 0">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-neutral-500">Rating</span>
      <span className="text-sm font-semibold">3.5/5 ⭐⭐⭐✰✰</span>
    </div>
    <h3 className="mt-3 text-lg font-semibold">User: Sana Rahman</h3>
    <p className="mt-2 text-neutral-700 0">
      Decent item. Color was slightly different from the photos. Return process was easy though.
    </p>
  </article>

  
  <article className="rounded-2xl border p-5 shadow-sm bg-white 0">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-neutral-500">Rating</span>
      <span className="text-sm font-semibold">4.8/5 ⭐⭐⭐⭐⭐</span>
    </div>
    <h3 className="mt-3 text-lg font-semibold">User: Arjun Mehta</h3>
    <p className="mt-2 text-neutral-700 0">
      Loved the build quality and the packaging. Arrived earlier than expected. Recommended.
    </p>
  </article>
    </div>
  )
}

export default ReviewSection