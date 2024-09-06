import { SwitchLight } from './SwitchLight'
import { SwitchLenguage } from './SwitchLenguage'

export function BarConfigs ({ className }) {
  return (
    <ul className={className}>
      <SwitchLenguage />
      <SwitchLight />
    </ul>
  )
}
