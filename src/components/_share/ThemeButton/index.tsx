'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Icon from '../Icon'

const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
}

const ThemeButton = () => {
  const { setTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(id)
  }, []);
  
  if (!mounted) return null

  const currentTheme = theme === THEME.SYSTEM ? systemTheme : theme

  if (currentTheme === THEME.DARK) {
    return <Dark cb={() => setTheme(THEME.LIGHT)} />
  }

  return <Light cb={() => setTheme(THEME.DARK)} />
}

const Light = ({ cb }: { cb: () => void }) => (
  <Icon name='sun' onClick={cb} />
)

const Dark = ({ cb }: { cb: () => void }) => (
  <Icon name='moon' onClick={cb} />
)

export default ThemeButton
