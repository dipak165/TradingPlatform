import React from 'react';
function Stats() {
    return (  
        <div className='container p-5'>
            <div className='row p-5'>
                    <div className='col-6 p-5 mb-5'>
               <h1 className='fs-2 '>Trust with confidence</h1>
               <br/>
               <h2 className='fs-4'>Customer-first always</h2>
               <p className='text-muted'>That's why 13+ crore,customer trust Zerodha with 3.5+ lakh crore worth of equlity investment</p>
               <h2 className='fs-4'>No spam or gimmicks</h2>
               <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notificatin. High quality apps that you use at your pace, the  way yo like.</p>
               <h2 className='fs-4'>The Zerodha universe</h2>
               <p className='text-muted'>Not just an app, but a whole ecosystem. Our inveatment in 30+ fintech satrtup offer you tailored services specific to your feed</p>
               <h2 className='fs-4'>Do better with money </h2>
               <p className='text-muted'>With invitatives like Nudge and switch, we don't just facilite trancation, but actively help you do better with your money. </p>
                </div>
                <div className='col-6 p-5 ml-5'>
               <img src='media/images/ecosystem.png' alt='' style={{width:"95%"}} />
               <div className='text-center'>
                <a href='explore' className='mx-5' style={{textDecoration:"none"}}>Explore the products </a>
                <a href='explore' style={{textDecoration:"none"}}>Try Kite demo</a>
               </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;