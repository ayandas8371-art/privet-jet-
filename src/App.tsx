import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RippleTrail from './components/RippleTrail'
import StaggeredMenu from './components/StaggeredMenu'
import FleetOverlay from './components/FleetOverlay'
import BrandManifesto from './components/BrandManifesto'
import Experiences from './components/Experiences'
import YachtSpecs from './components/YachtSpecs'
import Testimonials from './components/Testimonials'
import Membership from './components/Membership'
import Academy from './components/Academy'
import ConciergeForm from './components/ConciergeForm'
import Faq from './components/Faq'
import PressStrip from './components/PressStrip'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Blog from './components/Blog'
import JourneysPage from './components/JourneysPage'
import MembershipPage from './components/MembershipPage'
import AboutPage from './components/AboutPage'
import BookingModal from './components/BookingModal'
import AurumEclipsePage from './components/AurumEclipsePage'
import TitaniumStratusPage from './components/TitaniumStratusPage'
import ObsidianVelocityPage from './components/ObsidianVelocityPage'
import LegalPage from './components/LegalPage'
import ContactPage from './components/ContactPage'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fleetOpen, setFleetOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [journeysOpen, setJourneysOpen] = useState(false)
  const [membershipOpen, setMembershipOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [aurumOpen, setAurumOpen] = useState(false)
  const [titaniumOpen, setTitaniumOpen] = useState(false)
  const [obsidianOpen, setObsidianOpen] = useState(false)
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | 'cookies' | null>(null)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Header 
        menuOpen={menuOpen} 
        onBlogOpen={() => setBlogOpen(true)}
        onFleetOpen={() => setFleetOpen(true)}
        onJourneysOpen={() => setJourneysOpen(true)}
        onMembershipOpen={() => setMembershipOpen(true)}
        onAboutOpen={() => setAboutOpen(true)}
        onBookNow={() => setBookingOpen(true)}
      />
      
      <Hero fleetOpen={fleetOpen} menuOpen={menuOpen} onBookNow={() => setBookingOpen(true)} />
      
      <RippleTrail />
      
      <StaggeredMenu 
        isOpen={menuOpen} 
        onToggle={() => setMenuOpen(!menuOpen)}
        onFleetOpen={() => setFleetOpen(true)} 
        onJourneysOpen={() => setJourneysOpen(true)}
        onMembershipOpen={() => setMembershipOpen(true)}
        onAboutOpen={() => setAboutOpen(true)}
        onBlogOpen={() => setBlogOpen(true)}
        onBookNow={() => setBookingOpen(true)}
      />
      
      <FleetOverlay 
        isOpen={fleetOpen} 
        onClose={() => setFleetOpen(false)} 
        onObsidianOpen={() => setObsidianOpen(true)}
        onAurumOpen={() => setAurumOpen(true)}
        onTitaniumOpen={() => setTitaniumOpen(true)}
      />
      
      <div style={{ position: 'relative', zIndex: 25 }}>
        <div style={{ height: '100vh' }} />
        <div style={{ backgroundColor: 'var(--bg-base)' }}>
          <BrandManifesto />
          <Experiences />
          <YachtSpecs 
        onBookNow={() => setBookingOpen(true)} 
        onFleetOpen={() => setFleetOpen(true)} 
        onAurumOpen={() => setAurumOpen(true)}
        onTitaniumOpen={() => setTitaniumOpen(true)}
        onObsidianOpen={() => setObsidianOpen(true)}
      />    <Testimonials />
          <Membership />
          <Academy />
          <ConciergeForm onBookNow={() => setBookingOpen(true)} />
          <Faq />
          <PressStrip />
          <Footer 
            onOpenLegal={(doc) => setLegalDoc(doc)} 
            onFleetOpen={() => setFleetOpen(true)}
            onMembershipOpen={() => setMembershipOpen(true)}
            onContactOpen={() => setContactOpen(true)}
          />
        </div>
      </div>

      <CookieConsent />
      
      <Blog isOpen={blogOpen} onClose={() => setBlogOpen(false)} />
      <JourneysPage isOpen={journeysOpen} onClose={() => setJourneysOpen(false)} onBookNow={() => { setJourneysOpen(false); setBookingOpen(true); }} />
      <MembershipPage isOpen={membershipOpen} onClose={() => setMembershipOpen(false)} onContactOpen={() => { setMembershipOpen(false); setContactOpen(true); }} />
      <AboutPage isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <AurumEclipsePage isOpen={aurumOpen} onClose={() => { setAurumOpen(false); setFleetOpen(true); }} onBookNow={() => { setAurumOpen(false); setBookingOpen(true); }} />
      <TitaniumStratusPage isOpen={titaniumOpen} onClose={() => { setTitaniumOpen(false); setFleetOpen(true); }} onBookNow={() => { setTitaniumOpen(false); setBookingOpen(true); }} />
      <ObsidianVelocityPage isOpen={obsidianOpen} onClose={() => { setObsidianOpen(false); setFleetOpen(true); }} onBookNow={() => { setObsidianOpen(false); setBookingOpen(true); }} />
      <LegalPage documentType={legalDoc} onClose={() => setLegalDoc(null)} />
      <ContactPage isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}

export default App
