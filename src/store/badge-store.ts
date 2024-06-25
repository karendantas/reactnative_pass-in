import {create} from 'zustand'

export type BadgeStore = {
    id: string,
    name: string,
    email: string,
    eventTitle: string,
    checkInURL: string,
    image?: string
}

type StoreProps = {
    data: BadgeStore | null
    save: (data: BadgeStore) => void
}

//criando hook para dados do usuario
export const useBadgeStore = create<StoreProps>((set) => ({
    data:null,
    save:(data: BadgeStore) => set( () => ({ data }))
}))