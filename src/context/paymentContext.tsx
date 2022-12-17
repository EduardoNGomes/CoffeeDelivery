import { createContext, ReactNode, useState } from 'react'

interface PaymentContextProviderProps {
  children: ReactNode
}

interface PaymentContextProps {
  credit: boolean
  debit: boolean
  money: boolean

  handlePaymentMethod: (option: string) => void
}

export const PaymentContext = createContext({} as PaymentContextProps)

export function PaymentContextProvider({
  children,
}: PaymentContextProviderProps) {
  const [credit, setCredit] = useState(false)
  const [debit, setDebit] = useState(false)
  const [money, setMoney] = useState(false)

  function handlePaymentMethod(option: string) {
    switch (option) {
      case 'credit': {
        setCredit(true)
        setDebit(false)
        setMoney(false)
        break
      }
      case 'debit': {
        setDebit(true)
        setCredit(false)
        setMoney(false)
        break
      }
      case 'money': {
        setMoney(true)
        setCredit(false)
        setDebit(false)
        break
      }
      case 'reset': {
        setMoney(false)
        setCredit(false)
        setDebit(false)
        break
      }
    }
  }

  return (
    <PaymentContext.Provider
      value={{ credit, debit, money, handlePaymentMethod }}
    >
      {children}
    </PaymentContext.Provider>
  )
}
