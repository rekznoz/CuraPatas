import {createContext, useEffect, useState} from "react"
import axios from "axios";
export const UsuarioC = createContext()

export default function UsuarioProvider({children}) {

    const [usuario, setUsuario] = useState(null)
    const [datosUsuario, setDatosUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUsuario(user)
                obtenerUsuario(user.uid).then(data => {
                    setDatosUsuario(data)
                })
            } else {
                setUsuario(null)
                setDatosUsuario(null)
            }
            setCargando(false)
        })

        return () => unsubscribe() // Limpia el suscriptor
    }, [])

    if (!cargando) {
        return (
            <UsuarioC.Provider value={{usuario, setUsuario, datosUsuario, setDatosUsuario, cargando}}>
                {children}
            </UsuarioC.Provider>
        )
    }
}
