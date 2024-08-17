import ProfileForm from '@/components/profile/ProfileForm'
import { useAuth } from '@/hooks/useAuth'
import React from 'react'

export default function ProfilePage() {

    const {data, isLoading} = useAuth()
    
    if (isLoading) return "Cargando..."

    if(data) return <ProfileForm data={data}/>
}
