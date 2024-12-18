import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Hasnain", lastName: "Memon", email: "hasnain@gmail.com"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type = "greeting"
            title = "Welcome"
            user = {loggedIn.firstName || "Guest"}
            subtext = "Access and manage your account and transactions effectively."
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1500}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user = {loggedIn}
        banks = {[{currentBalance: 1000}, {currentBalance: 2000}]}
        transactions = {[]}
      />
    </section>
  )
}

export default Home