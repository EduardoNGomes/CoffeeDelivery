import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface AddressProviderProps {
  changeState: (
    stateName: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void
  cep: string
  uf: string
  street: string
  city: string
  district: string
  houseNumber: string
  complement: string
}

export const AddressContext = createContext({} as AddressProviderProps)

interface AddressContextProps {
  children: ReactNode
}

export function AddressContextProvider({ children }: AddressContextProps) {
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [complement, setComplement] = useState('')

  useEffect(() => {
    if (cep.length === 8) {
      const validacep = /^[0-9]{8}$/

      if (validacep) {
        async function getCEP() {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((data) => data.json())
            .then((cep) => cep)

          setStreet(response.logradouro)
          setCity(response.localidade)
          setDistrict(response.bairro)
          setUf(response.uf)
        }
        getCEP()
      } else {
        alert('cep invalido')
      }
    }
  }, [cep])

  function changeState(
    stateName: string,
    event?: React.ChangeEvent<HTMLInputElement>,
  ) {
    if (event) {
      switch (stateName) {
        case 'cep': {
          return setCep(event.target.value)
        }
        case 'uf': {
          return setCep(event.target.value)
        }
        case 'street': {
          return setStreet(event.target.value)
        }
        case 'city': {
          return setCity(event.target.value)
        }
        case 'district': {
          return setDistrict(event.target.value)
        }
        case 'complement': {
          return setComplement(event.target.value)
        }
        case 'houseNumber': {
          return setHouseNumber(event.target.value)
        }
      }
    } else {
      setStreet('')
      setCity('')
      setDistrict('')
      setUf('')
    }
  }

  return (
    <AddressContext.Provider
      value={{
        changeState,
        cep,
        uf,
        street,
        city,
        district,
        houseNumber,
        complement,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
