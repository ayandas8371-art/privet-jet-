import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

interface BookingModalProps {
  open: boolean
  onClose: () => void
}

type FormState = 'idle' | 'submitting' | 'success'

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [formState, setFormState] = useState<FormState>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => {
      setFormState('success')
      setTimeout(() => {
        setFormState('idle')
        onClose()
      }, 2800)
    }, 1600)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[4000] flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(12,12,14,0.85)', backdropFilter: 'blur(20px)' }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ scale: 0.96, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="relative bg-white rounded-2xl p-8 md:p-14 w-full max-w-[680px] max-h-[90vh] overflow-y-auto"
            style={{ scrollbarWidth: 'none', boxShadow: '0 32px 64px rgba(0,0,0,0.3)' }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center justify-center text-[#1c3557] transition-all duration-300"
              style={{ width: '40px', height: '40px', border: '1px solid rgba(28,53,87,0.1)', borderRadius: '50%' }}
              aria-label="Close modal"
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1c3557'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1c3557' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M1 1l10 10M11 1L1 11"/>
              </svg>
            </button>

            {/* Header */}
            <div className="mb-10 text-center md:text-left">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#1c3557] block mb-3 font-semibold opacity-80">Priority Booking</span>
              <h2 id="modal-title" className="font-serif text-[2.4rem] md:text-[3rem] text-[#0c0c0e] leading-[1.1]">
                Request a Charter.
              </h2>
            </div>

            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-4" style={{ background: '#1c3557' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl text-[#0c0c0e]">Request Received</h3>
                  <p className="text-[rgba(12,12,14,0.6)] text-[0.85rem] max-w-[320px] leading-relaxed">
                    Our concierge team will contact you within 2 hours. All enquiries are strictly confidential.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <FormField id="name" label="Your Name" type="text" placeholder="Full name" required />
                    <FormField id="email" label="Email Address" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-2">
                    <FormField id="from" label="Departure" type="text" placeholder="City or Airport" />
                    <FormField id="to"   label="Destination" type="text" placeholder="City or Airport" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-2">
                    <FormField id="date" label="Departure Date" type="date" />
                    <div className="flex flex-col gap-2">
                      <label htmlFor="pax" className="text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(28,53,87,0.6)] font-semibold">Passengers</label>
                      <select
                        id="pax"
                        className="w-full bg-transparent border-b border-[rgba(28,53,87,0.2)] px-0 py-3 text-[0.95rem] text-[#1c3557] focus:outline-none focus:border-[#1c3557] transition-all appearance-none rounded-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231c3557' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.5rem center',
                          paddingRight: '2.5rem',
                        }}
                      >
                        <option>1-4 Passengers</option>
                        <option>5-8 Passengers</option>
                        <option>9-12 Passengers</option>
                        <option>13-19 Passengers</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="aircraft" className="text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(28,53,87,0.6)] font-semibold">Preferred Aircraft</label>
                    <select
                      id="aircraft"
                      className="w-full bg-transparent border-b border-[rgba(28,53,87,0.2)] px-0 py-3 text-[0.95rem] text-[#1c3557] focus:outline-none focus:border-[#1c3557] transition-all appearance-none rounded-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231c3557' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.5rem center',
                        paddingRight: '2.5rem',
                      }}
                    >
                      <option value="">Any Available</option>
                      <option>OBSIDIAN VELOCITY</option>
                      <option>AURUM ECLIPSE</option>
                      <option>TITANIUM STRATUS</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === 'submitting'}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full py-4 text-[0.75rem] tracking-[0.2em] uppercase font-semibold text-white rounded-full transition-all duration-300 disabled:opacity-70"
                    style={{ background: '#1c3557' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#253f63'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(28,53,87,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#1c3557'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                        SENDING...
                      </span>
                    ) : 'SUBMIT ENQUIRY'}
                  </motion.button>

                  <p className="text-[0.65rem] tracking-[0.05em] text-center text-[rgba(28,53,87,0.5)] mt-2">
                    Our team responds within 2 hours. All enquiries are strictly confidential.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function FormField({
  id, label, type, placeholder, required,
}: {
  id: string; label: string; type: string; placeholder?: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.6rem] tracking-[0.2em] uppercase text-[rgba(28,53,87,0.6)] font-semibold">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-[rgba(28,53,87,0.2)] px-0 py-3 text-[0.95rem] text-[#1c3557] placeholder-[rgba(28,53,87,0.3)] focus:outline-none focus:border-[#1c3557] transition-all rounded-none"
      />
    </div>
  )
}
