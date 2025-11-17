
import { create } from "zustand";

export const userAuthStore = create((set) => ({
    authorized: null,
    user: null,

    setAuthorized: (value) => set({authorized: value}),

    setUser: (user) => set({user}),

    checkAuth: async() => {
        try {
            const response = await fetch('https://nodeclass-batch3.vercel.app/profile', {
                method: 'GET',
                credentials: 'include'
            })

            if(response.ok) {
                const data = await response.json()
                set({authorized: true, user: data.user})
            }else{
                set({authorized: false, user: null})
            }
        } catch (err) {
            if(err instanceof Error) {
                console.error(err.cause)
            }

            set({authorized: false, user: null})
        }
    }
}))