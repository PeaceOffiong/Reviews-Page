import React from 'react';
import Review from './Review';
function App() {
  return <main>
    <section className='container'>
      <div className="title">
      <h2>Our Review</h2>
      <div className='underline'></div>
    </div>
      <article className='review'>
        <Review />
      </article>
    </section>
  </main>;
}

export default App;
