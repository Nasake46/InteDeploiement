import { useEffect } from 'react'
import { supabase } from '../services/supabase'

export default function TestSupabase() {
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('favorites').select('*')
      console.log('DATA:', data)
      console.log('ERROR:', error)
    }

    fetchData()
  }, [])

  return <div>Test Supabase lancé ! (regarde la console)</div>
}
