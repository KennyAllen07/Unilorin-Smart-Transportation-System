import React from 'react'
import Navbar from '../../components/Navbar';
import DashboardFooter from '../../components/DashboardFooter';
import '../../utilities/index';

function Dashboard() {
  return (
    <>
        <Navbar />
        <main>
            <section class="hero">
                <div class="container py-auto h-full flex flex-col justify-center items-center">
                    <h2 class="Welcome">Welcome to the University Of Ilorin Bus Transportation Portal</h2>
                    <p class="intro py-3">Probitas Doctrina</p>
                    <a href="../Pages/Signup Page.html" class="btn-cta" id="get-started-btn">Get Started</a>
                </div>
            </section>
            <section class="about py-4">
                <div class="container">
                    {/* <h2>About Us</h2> */}
                    <p class="about-text">
                        {/* <h2 className='about-header pb-0'>
                            Welcome to the University of Ilorin Transportation Ticketing System!
                        </h2> */}
                        {/* <br /> */}
                        We make campus travel simple and efficient by providing an easy-to-use platform for booking rides, managing schedules, and accessing real-time bus updates. Our goal is to ensure safe, reliable, and eco-friendly transportation for students, faculty, and staff.
                        <br />
                        Because at <b><i>Better By Far</i></b>, your journey matters. 🚍
                    </p>
                </div>
            </section>
        </main>
        <DashboardFooter />
    </>
  )
}

export default Dashboard;