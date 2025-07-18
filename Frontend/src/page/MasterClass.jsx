import React from 'react'
import MasterHero from '../components/masterhero'
import GameBanner from '../components/GameBanner'
import CommitToGrowth from '../components/CommitToGrowth'
import OptionMC from '../components/OptionMC'
import { MCmembership } from '../components/MCmembership'
import { MCwho } from '../components/MCwho'


export const Masterclass = () => {
  return (
    <div>
        <MasterHero/>
    <GameBanner/>
    <CommitToGrowth/>
    <OptionMC/>
    <MCmembership/>
    <MCwho/>
    </div>
  )
}
